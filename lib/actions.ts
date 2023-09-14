'use server'

import {redisClient} from "@/lib/redis";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import {toast} from "@/components/ui/use-toast";

export async function addNewLink(formData: FormData) {
    const session = await getServerSession(authOptions)

    if (!session) {
        console.log('No Session')
        return
    }

    const id = session.user.id

    if (!formData.get('site') || !formData.get('link')) {
        console.log('Invalid Data')
        return
    }

    const data = {
        [formData.get('site')!.toString()]: formData.get('link')!.toString()
    }

    const isExists = await redisClient.hexists(`user:${id}:links`, formData.get('site')!.toString())
    if (isExists) {
        console.log('Already Exists')
        return
    }

    await redisClient.hset(`user:${id}:links`, data).then(() => {
        console.log('Added')
    })
}