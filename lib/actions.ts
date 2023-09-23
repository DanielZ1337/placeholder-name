'use server'

import {redisClient} from "@/lib/redis";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import {GeolocationApiResponse} from "@/types/geolocation-api-response";
import {createLinkKey, Link} from "@/types/links";
import {createVisitAnalyticsKey} from "@/types/analytics";

export async function testServer() {
    console.log('testServer')
    return 'testServer'
}

export async function AddNewVisitAnalytics(id: string, href:string, geo: GeolocationApiResponse) {
    const data = {
        id,
        date: Date.now(),
        geo
    }

    await redisClient.sadd(createVisitAnalyticsKey(id, href), JSON.stringify(data)).then(() => {
        console.log('Added')
    })

    // revalidatePath(`/profile/${id}`)
}

export async function addNewLinkAnalytics(formData: FormData) {
    const session = await getServerSession(authOptions)

    if (!session) {
        throw new Error('Not authenticated')
    }

    const id = session.user.id

    if (!formData.get('href') || !formData.get('geo')) {
        throw new Error('Missing data')
    }

    const data = {
        id,
        href: (formData.get('href') as string).toLowerCase(),
        date: Date.now(),
        geo: JSON.parse(formData.get('geo') as string)
    }

    const isExists = await redisClient.sismember(`link-analytics:${id}:${data.href}`, JSON.stringify(data))
    if (isExists) {
        throw new Error('Link analytics already exists')
    }

    await redisClient.sadd(`link-analytics:${id}:${data.href}`, JSON.stringify(data)).then(() => {
        console.log('Added')
    })

    // revalidatePath(`/profile/${id}`)
}

export async function addNewLink(formData: FormData) {
    const session = await getServerSession(authOptions)

    if (!session) {
        throw new Error('Not authenticated')
    }

    const id = session.user.id

    // const data = JSON.parse(formData.get('payload') as string) as Links
    const sites = formData.getAll('site') as string[] as Link['site'][]
    const links = formData.getAll('href') as string[] as Link['href'][]

    if (!sites || !links || sites.length !== links.length && sites.length > 0) {
        throw new Error('Missing data')
    }

    const data = sites.map((site, id) => ({
        id,
        site,
        href: links[id],
    })) satisfies Link[]

    await redisClient.set(createLinkKey(id), JSON.stringify(data)).then(() => {
        console.log('Links set')
    })


    // revalidatePath(`/profile/${id}`)
}