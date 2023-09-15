import React from 'react'
import Link from "next/link";
import {siteConfig} from "@/lib/site";
import logo from '@/public/logo.svg';
import {Image} from "@nextui-org/image";

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-black">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="/" className="flex items-center mb-4 sm:mb-0">
                        <Image src={logo.src} className="h-8 mr-3" alt={`${siteConfig.title} Logo`}/>
                        <span
                            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{siteConfig.title}</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="mr-4 hover:underline hover:decoration-secondary hover:text-secondary md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline hover:decoration-secondary hover:text-secondary md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline hover:decoration-secondary hover:text-secondary md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline hover:decoration-secondary hover:text-secondary">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <span
                    className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy; {new Date().getFullYear()}{' '}
                    <Link href="/" className="hover:underline hover:decoration-secondary hover:text-secondary">{siteConfig.title}™</Link>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}
