import { authOptions } from '@/lib/auth'
import { redisClient } from '@/lib/redis'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function Page({ params }: { params: { id: string } }) {
    const user = await redisClient.get(`user:${params.id}`)
    console.log(user)

    return (
        <div>Page</div>
    )
}
