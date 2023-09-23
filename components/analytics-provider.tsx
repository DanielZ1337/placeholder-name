import useClientGeolocation from "@/lib/hooks/client/useClientGeolocation";
import {startTransition, useEffect} from "react";
import {usePathname} from "next/navigation";
import {AddNewVisitAnalytics} from "@/lib/actions";
import {useCookieContext} from "@/components/cookie-provider";

export default function AnalyticsProvider({children}: { children: React.ReactNode }) {
    const {getCookiePermissions} = useCookieContext()
    const cookiePermissions = getCookiePermissions()
    const {isLoading, data} = useClientGeolocation()
    const pathname = usePathname()

    useEffect(() => {
        if (!isLoading && data && cookiePermissions?.analytics) {
            if (pathname.match(/^\/profile\/[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12}$/)) {
                const id = pathname.split('/')[2]
                startTransition(() => {
                    AddNewVisitAnalytics(id, pathname, data).then(() => {
                        console.log('Added Analytics')
                    })
                })
            }
        }
    }, [isLoading, data, pathname, cookiePermissions?.analytics])

    return (
        <>
            {children}
        </>
    )
}