"use client"

import React from 'react'
import {
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle
} from "@nextui-org/react";
import AccountDropdown from './account-dropdown';
import {cn} from '@/lib/utils';
import {useSession} from 'next-auth/react';
import ThemeSwitcher from './theme-switcher';
import logo from '@/public/logo.svg';
import {Image} from "@nextui-org/image";
import {default as NextLink} from "next/link";

export default function Header() {
    const [navbarShadow, setNavbarShadow] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
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

    const {data: session, status} = useSession()

    return (
        <Navbar className={cn('backdrop-blur', navbarShadow && 'shadow')} onMenuOpenChange={setIsMenuOpen}>
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
            />
            <NavbarBrand>
                <NextLink href={'/'} className={"flex items-center gap-2"}>
                    <Image src={logo.src} alt="Logo" className="w-10 h-10"/>
                    <p className="font-bold text-inherit">SMLinks</p>
                </NextLink>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <NextLink href={`/profile/${session?.user.id}`} passHref legacyBehavior>
                        <Link color="foreground">
                            Profile
                        </Link>
                    </NextLink>
                </NavbarItem>
                <NavbarItem isActive>
                    <NextLink href={'#'} passHref legacyBehavior>
                        <Link aria-current="page" color="secondary">
                            Customers
                        </Link>
                    </NextLink>
                </NavbarItem>
                <NavbarItem>
                    <NextLink href={'#'} passHref legacyBehavior>
                        <Link color="foreground">
                            Integrations
                        </Link>
                    </NextLink>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent as="div" justify="end">
                <ThemeSwitcher/>
                <AccountDropdown/>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <NextLink href={'#'} passHref legacyBehavior>
                            <Link
                                color={
                                    index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                className="w-full"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NextLink>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

