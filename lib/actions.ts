'use server'

import {redisClient} from "@/lib/redis";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import {toast} from "@/components/ui/use-toast";

export async function addNewLink(formData: FormData) {
    const session = await getServerSession(authOptions)

    if (!session) {
        throw new Error('Not authenticated')
    }

    const id = session.user.id

    if (!formData.get('site') || !formData.get('link')) {
        throw new Error('Missing data')
    }

    const data = {
        [(formData.get('link') as string).toLowerCase()]:(formData.get('site') as string).toLowerCase()
    }

    const isExists = await redisClient.hexists(`user:${id}:links`, formData.get('site') as string)
    if (isExists) {
        throw new Error('Link already exists')
    }

    await redisClient.hset(`user:${id}:links`, data).then(() => {
        console.log('Added')
    })
}