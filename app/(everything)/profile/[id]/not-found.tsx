'use client'

import '@/app/globals.css'
import Link from 'next/link'
import {Button} from "@nextui-org/react";

export default function NotFound() {
    return (
        <div
            className={"w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 items-center -mt-20"}>
            <p className="mb-10 text-base font-semibold uppercase text-primary md:text-xl">Error 404</p>
            <h1 className="mb-2 text-center text-4xl font-bold text-secondary-foreground sm:text-left md:text-5xl">Page
                not found</h1>

            <p className="mb-10 text-center text-muted-foreground/80 sm:text-left md:text-2xl">
                The user
                you&apos;re
                looking for doesn&apos;t exist.
            </p>

            <Link href="/">
                <Button variant={"ghost"} color={"secondary"} size={"lg"} className={"px-20 py-8 text-xl"}>
                    Go home
                </Button>
            </Link>
        </div>
    )
}