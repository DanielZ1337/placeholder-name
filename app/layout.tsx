import Providers from '@/components/providers'
import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {cn} from '@/lib/utils'
import {siteConfig} from "@/lib/site";
import {Toaster} from "@/components/ui/toaster";
import {Suspense} from "react";
import {Spinner} from "@nextui-org/spinner";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import {ourFileRouter} from "@/app/api/uploadthing/core";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        template: `%s | ${siteConfig.title}`,
        default: siteConfig.title,
    },
    description: siteConfig.description,
    icons: [
        {
            rel: 'icon',
            type: 'image/x-icon',
            url: new URL('/favicon.ico', siteConfig.url).toString(),
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            url: new URL('/favicon-32x32.png', siteConfig.url).toString(),
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            url: new URL('/favicon-16x16.png', siteConfig.url).toString(),
        },
        {
            rel: 'icon',
            type: 'image/svg+xml',
            url: new URL('/favicon.svg', siteConfig.url).toString(),
        },
        {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            url: new URL('/apple-touch-icon.png', siteConfig.url).toString(),
        },
        {
            rel: 'manifest',
            url: new URL('/site.webmanifest', siteConfig.url).toString(),
        },
        {
            rel: 'mask-icon',
            url: new URL('/safari-pinned-tab.svg', siteConfig.url).toString(),
            color: '#000000',
        },
    ],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteConfig.url,
        siteName: siteConfig.title,
        title: siteConfig.title,
        description: siteConfig.description,
        images: {
            url: new URL('/og.png', siteConfig.url).toString(),
            width: 1200,
            height: 630,
        },
    },
    twitter: {
        title: siteConfig.title,
        description: siteConfig.description,
        site: siteConfig.links.twitter,
        images: {
            url: new URL('/og.png', siteConfig.url).toString(),
            width: 1200,
            height: 630,
            alt: siteConfig.title,
        },
        creator: siteConfig.links.twitter,
        card: "summary_large_image"
    },
    creator: siteConfig.links.twitter,
    authors: [
        {
            name: siteConfig.creator,
            url: siteConfig.links.twitter,
        },
        {
            name: siteConfig.creator,
            url: siteConfig.links.github,
        },
        {
            name: siteConfig.creator,
            url: siteConfig.links.linkedin,
        },
        {
            name: siteConfig.creator,
            url: siteConfig.links.email,
        },
    ],
    other: {
        'theme-color': '#ffffff',
        'msapplication-TileColor': '#da532c',
        'msapplication-config': new URL('/browserconfig.xml', siteConfig.url).toString(),
    }
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={cn(inter.className, 'min-h-[100dvh] flex-1')}>
        <Providers>
            <Suspense fallback={<Spinner size={"lg"} color={"current"} className={"absolute inset-0 m-auto"}/>}>
                <NextSSRPlugin
                    /**
                     * The `extractRouterConfig` will extract **only** the route configs
                     * from the router to prevent additional information from being
                     * leaked to the client. The data passed to the client is the same
                     * as if you were to fetch `/api/uploadthing` directly.
                     */
                    routerConfig={extractRouterConfig(ourFileRouter)}
                />
                {children}
            </Suspense>
            <Toaster/>
        </Providers>
        </body>
        </html>
    )
}
