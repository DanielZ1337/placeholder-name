import {GeolocationApiResponse} from "@/types/geolocation-api-response";

export type Analytics = {
    date: number
    user_agent?: string
    href: string
    geo?: GeolocationApiResponse
}

export const linkAnalyticsPrefix = 'link-analytics:'
export const visitAnalyticsPrefix = 'visit-analytics:'

export const createLinkAnalyticsKey = (id: string, href: string) => `${linkAnalyticsPrefix}${id}:${href}`
export const createVisitAnalyticsKey = (id: string, href: string) => `${visitAnalyticsPrefix}${id}:${href}`
