'use client'

import '@/app/globals.css'
import Link from 'next/link'
import Image from "next/image";
import _404 from '@/public/images/404.jpg'
import {Button} from "@nextui-org/react";

export default function NotFound() {
    return (
        <div className="bg-background py-6 sm:py-8 lg:py-12 max-h-[100dvh] h-[100dvh]">
            <div className="mx-auto max-w-screen-lg px-4 md:px-8 h-full max-h-[100dvh]">
                <div className="grid gap-8 sm:grid-cols-2 h-full">
                    <div className="flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32">
                        <p className="mb-4 text-sm font-semibold uppercase text-primary md:text-base">Error 404</p>
                        <h1 className="mb-2 text-center text-2xl font-bold text-secondary-foreground sm:text-left md:text-3xl">Page
                            not found</h1>

                        <p className="mb-8 text-center text-muted-foreground/80 sm:text-left md:text-lg">The page you&apos;re
                            looking for doesn&apos;t exist.</p>

                        <Link href="/">
                            <Button variant={"light"} color={"secondary"} size={"lg"} className={"px-8 py-3"}>
                                Go home
                            </Button>
                        </Link>
                    </div>
                    <div className="relative h-80 overflow-hidden rounded-lg bg-muted shadow-lg md:h-auto">
                        <Image src={_404} alt="Photo by @heydevn"
                               className="absolute inset-0 h-full w-full object-cover object-center"/>
                    </div>
                </div>
            </div>
        </div>
    )
}