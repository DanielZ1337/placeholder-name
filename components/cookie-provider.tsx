import React, {createContext, useContext, useEffect, useState} from "react";
import {useDisclosure} from "@nextui-org/react";
import CookieModal from "@/components/cookie-modal";
import {CookiePreferences} from "@/types/cookie-preferences";

export const CookieContext = createContext<CookieContextType>({} as CookieContextType)

type CookieContextType = {
    isOpen: boolean,
    onOpen: () => void,
    onOpenChange: () => void,
    getCookiePermissions: () => CookiePreferences | undefined,
    setCookiePermissions: (cookiePreferences: CookiePreferences) => void,
    saveCookiePermissions: () => void
}

export const DefaultCookiePermissions = {
    necessary: true,
    preferences: true,
    analytics: true
} satisfies CookiePreferences

export const useCookieContext = () => useContext(CookieContext)

export const setCookiePermissions = (cookiePreferences: CookiePreferences) => {
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences))
}

export const saveCookiePermissions = () => {
    const currentCookiePermissions = localStorage.getItem('cookiePreferences')
    if (!currentCookiePermissions) {
        localStorage.setItem('cookiePreferences', JSON.stringify(DefaultCookiePermissions))
    }
}

function getCookiePermissions() {
    const currentCookiePermissions = localStorage.getItem('cookiePreferences')

    if (!currentCookiePermissions) {
        return
    } else {
        return JSON.parse(currentCookiePermissions)
    }
}

export default function CookieProvider({children}: { children: React.ReactNode }) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])
    useEffect(() => {
        if (mounted) {
            const currentCookiePermissions = getCookiePermissions()
            if (!currentCookiePermissions) {
                onOpen()
            }
        }
    }, [mounted, onOpen])
    if (!mounted) return null

    return (
        <CookieContext.Provider value={{
            isOpen,
            onOpen,
            onOpenChange,
            getCookiePermissions,
            setCookiePermissions,
            saveCookiePermissions
        }}>
            {children}
            <CookieModal/>
        </CookieContext.Provider>
    )
}