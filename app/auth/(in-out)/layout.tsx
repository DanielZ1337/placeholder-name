'use client'

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";
import {Button} from "@nextui-org/react";
import {Home} from "lucide-react";
import auth_background from "@/public/images/login-background.jpg";
import React from "react";
import {siteConfig} from "@/lib/site";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <section className="min-h-screen flex items-stretch text-white ">
            <Link href={"/"} className={"absolute top-4 left-4 z-50 w-24 h-24"}>
                <Image src={logo} alt="logo" className={"hidden sm:block"}/>
                <Button
                    variant={"light"}
                    color={"secondary"}
                    className={"sm:hidden"}
                >
                    <Home/>
                </Button>
            </Link>
            <div className="lg:flex w-1/2 hidden bg-gray-500 relative items-center overflow-clip">
                <Image className="absolute z-0 inset-0 bg-gray-500 items-center" src={auth_background}
                       alt={"clothes"}/>
                <div className="absolute bg-black opacity-80 inset-0 z-0 h-screen"></div>
                <div className="w-full px-24 z-10">
                    <h1 className="text-5xl font-bold text-left tracking-wide">Streamline Your Online Presence</h1>
                    <p className="text-3xl my-4">Simplify your digital life and make connecting a breeze.</p>
                </div>
                <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
                    <SocialLinks/>
                </div>
            </div>
            <div
                className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0">
                <Image className="absolute lg:hidden z-10 inset-0 bg-gray-500 items-center object-cover"
                       src={auth_background} alt={"clothes"} sizes={"100vw, (min-width: 768px) 50vw, 400px"}/>
                <div className="absolute lg:hidden bg-black opacity-80 inset-0 z-20 h-screen"></div>
                <div className="w-full py-6 z-20">
                    {children}
                    <div
                        className="p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-16 lg:hidden ">
                        <SocialLinks/>
                    </div>
                </div>
            </div>
        </section>
    )
}

function SocialLinks() {
    return <>
        <Link className={"hover:text-primary"} href={siteConfig.links.twitter}>
            {/*{React.cloneElement(siteConfig.links.twitter.icon, {size: 24})}*/}
        </Link>
        <Link className={"hover:text-primary"} href={siteConfig.links.linkedin}>
            {/*{React.cloneElement(siteConfig.links.linkedin.icon, {size: 24})}*/}
        </Link>
        <Link className={"hover:text-primary"} href={'siteConfig.links.instagram'}>
            {/*{React.cloneElement(siteConfig.links.instagram.icon, {size: 24})}*/}
        </Link>
    </>;
}