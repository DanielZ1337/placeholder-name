'use server'

import {redisClient} from "@/lib/redis";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import {GeolocationApiResponse} from "@/types/geolocation-api-response";
import {createLinkKey, Links} from "@/types/links";

export async function testServer() {
    console.log('testServer')
    return 'testServer'
}

export async function AddNewVisitAnalytics(id: string, geo: GeolocationApiResponse) {
    const data = {
        id,
        date: Date.now(),
        geo
    }

    await redisClient.sadd(`visit-analytics:${id}`, JSON.stringify(data)).then(() => {
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

    if (process.env.NODE_ENV === 'development') {
        const data = JSON.parse(formData.get('payload') as string) as Links
        const sites = data.map(entry => entry.site.toLowerCase())
        const links = data.map(entry => entry.href.toLowerCase())

        if (!sites || !links || !data || !data.length) {
            throw new Error('Missing data')
        }

        await redisClient.set(createLinkKey(id), JSON.stringify(data)).then(() => {
            console.log('Links set')
        })

        return
    }

    const site = (formData.get('site') as string).toLowerCase()
    const href = (formData.get('href') as string).toLowerCase()

    if (!site || !href) {
        throw new Error('Missing data')
    }

    const data = {
        [site]: href
    }

    const isExists = await redisClient.hexists(createLinkKey(id), site)
    if (isExists) {
        throw new Error('Link already exists')
    }

    await redisClient.hmset(createLinkKey(id), data).then(() => {
        console.log('Added')
    })

    // revalidatePath(`/profile/${id}`)
}