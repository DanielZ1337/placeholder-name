"use client"

import React from 'react'
import {NextUIProvider} from "@nextui-org/react";
import {SessionProvider} from 'next-auth/react';
import {ThemeProvider as NextThemesProvider} from "next-themes";
import CookieProvider from "@/components/cookie-provider";

export default function Providers({children}: { children: React.ReactNode }) {
    return (
        <CookieProvider>
            <SessionProvider>
                <NextUIProvider>
                    <NextThemesProvider attribute="class" defaultTheme="dark">
                        {children}
                    </NextThemesProvider>
                </NextUIProvider>
            </SessionProvider>
        </CookieProvider>
    )
}
