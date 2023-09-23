'use client'

import {startTransition, useEffect} from "react";
import useClientGeolocation from '@/lib/hooks/client/useClientGeolocation'
import {AddNewVisitAnalytics} from "@/lib/actions";

export default function useProfileAnalyticsQuery(id: string) {
    console.log('useProfileAnalyticsQuery', id)
    const {isLoading, data} = useClientGeolocation()


    useEffect(() => {
        console.log('useProfileAnalyticsQuery', id, data)
        if (isLoading || !data) return

        startTransition(() => {
            AddNewVisitAnalytics(id, data).then(() => {
                console.log('AddNewVisitAnalytics success')
            })
        })
    }, [isLoading, id, data])

    return {isLoading, data}
}