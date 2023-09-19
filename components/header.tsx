"use client"

import React from 'react'
import {
    Button,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    ScrollShadow
} from "@nextui-org/react";
import AccountDropdown from './account-dropdown';
import { cn } from '@/lib/utils';
import { useSession } from 'next-auth/react';
import ThemeSwitcher from './theme-switcher';
import logo from '@/public/logo.svg';
import { Image } from "@nextui-org/image";
import { default as NextLink } from "next/link";
import { usePathname } from "next/navigation";
import LoginModal from "@/components/login/login-modal/login-modal";

export default function Header() {
    const [navbarShadow, setNavbarShadow] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavbarShadow(true);
            } else {
                setNavbarShadow(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const { data: session, status } = useSession()

    const menuItems = [
        {
            name: "Edit Profile",
            href: "/profile"
        },
        {
            name: "Preview",
            href: `/preview/${session?.user?.id}`,
        },
        {
            name: "Settings",
            href: "/profile/settings"
        },
        {
            name: "Your Profile",
            href: `/profile/${session?.user?.id}`,
        }
    ]

    const pathname = usePathname()

    return (
        <Navbar className={cn('backdrop-blur ease-in-out duration-200 transition-all', navbarShadow && "shadow-lg bg-background")} onMenuOpenChange={setIsMenuOpen}>
            {status === "authenticated" && (
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
            )}
            <NavbarBrand>
                <NextLink href={'/'} className={"flex items-center gap-2"}>
                    <Image src={logo.src} alt="Logo" className="w-10 h-10" />
                    <p className="font-bold text-inherit text-xl">SMLinks</p>
                </NextLink>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {status === "authenticated" && (
                    menuItems.map((item, index) => (
                        <NavbarItem isActive={pathname === item.href} key={`${item.href}-${index}`}>
                            <NextLink href={item.href}>
                                <Link aria-current={isCurrentPage(pathname, item.href) && "page"}
                                    color={isCurrentPage(pathname, item.href) ? "secondary" : "foreground"}>
                                    {item.name}
                                </Link>
                            </NextLink>
                        </NavbarItem>
                    )))}
            </NavbarContent>

            <NavbarContent as="div" justify="end">
                <ThemeSwitcher />
                {status === "unauthenticated" && (
                    <LoginModal />
                )}
                {status === "authenticated" && (
                    <AccountDropdown />
                )}
            </NavbarContent>
            <NavbarMenu className="sm:hidden w-full">
                <ScrollShadow hideScrollBar className="w-full h-[100dvh]">
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item.href}-${index}`} className={"p-4"}>
                            <NextLink href={item.href}>
                                <Link
                                    aria-current={isCurrentPage(pathname, item.href) && "page"}
                                    className={cn("w-full group")}
                                    size="lg"
                                >
                                    <Button
                                        color={"secondary"}
                                        variant={isCurrentPage(pathname, item.href) ? "solid" : "faded"}
                                        className={cn("w-full active:shadow-secondary-200/20 active:scale-90 active:shadow-none transition-transform duration-100 ease-in-out group-active:text-opacity-75", isCurrentPage(pathname, item.href) && "text-opacity-100", isCurrentPage(pathname, item.href) ? "text-white" : "text-foreground")}
                                        size="lg"
                                    >
                                        {item.name}
                                    </Button>
                                </Link>
                            </NextLink>
                        </NavbarMenuItem>
                    ))}
                </ScrollShadow>
            </NavbarMenu>
        </Navbar>
    );
}

function isCurrentPage(pathname: string, href: string) {
    return pathname === href
}

