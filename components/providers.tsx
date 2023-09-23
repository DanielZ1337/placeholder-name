"use client"

import React from 'react'
import {NextUIProvider} from "@nextui-org/react";
import {SessionProvider} from 'next-auth/react';
import {ThemeProvider as NextThemesProvider} from "next-themes";
import CookieProvider from "@/components/cookie-provider";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import AnalyticsProvider from "@/components/analytics-provider";

export default function Providers({children}: { children: React.ReactNode }) {
    const queryClient = new QueryClient()

    return (
        <CookieProvider>
            <SessionProvider>
                <NextUIProvider>
                    <NextThemesProvider attribute="class" defaultTheme="dark">
                        <QueryClientProvider client={queryClient}>
                            <AnalyticsProvider>
                                {children}
                            </AnalyticsProvider>
                        </QueryClientProvider>
                    </NextThemesProvider>
                </NextUIProvider>
            </SessionProvider>
        </CookieProvider>
    )
}
