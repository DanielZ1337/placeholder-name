import {useMutation} from '@tanstack/react-query';
import axios from 'axios'
import {startTransition} from "react";
import {testServer} from "@/lib/actions";
import {Analytics} from "@/types/analytics";

export default function useLinkAnalyticsQuery({...args}: Omit<Analytics, 'date' | 'user_agent'>) {
    return useMutation(
        async () => {
            const {data} = await axios.post('/api/link-analytics', {...args, date: Date.now()})
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