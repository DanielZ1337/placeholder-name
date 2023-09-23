import {useMutation} from '@tanstack/react-query';
import axios from 'axios'
import {startTransition} from "react";
import {testServer} from "@/lib/actions";

type Parameters = {
    id: string,
    href: string,
    geo: {} | undefined
}

export default function useLinkAnalyticsQuery({...args}: Parameters) {
    return useMutation(
        async () => {
            const {data} = await axios.post('/api/link-analytics', {date: Date.now(), ...args})
            return data
        },
        {
            onSuccess: (data) => {
                startTransition(() => {
                    testServer().then(() => {
                        console.log('testServer success')
                    })

                    console.log('useLinkAnalyticsQuery success', data)
                })
                console.log('useLinkAnalyticsQuery success', data)
            },
            onError: (error) => {
                console.log('useLinkAnalyticsQuery error', error)
            }
        }
    )
}