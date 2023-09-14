import {redisClient} from '@/lib/redis'
import React from 'react'
import {Image} from "@nextui-org/image";

export async function generateStaticParams() {
    const users = await redisClient.smembers('users')
    return users.map(user => ({params: {id: user}}))
}

export async function getStaticPaths() {
    const users = await redisClient.smembers('users')
    return {
        paths: users.map(user => ({params: {id: user}})),
        fallback: true
    }
}

export default async function Page({params}: { params: { id: string } }) {
    const user = await redisClient.get(`user:${params.id}`)

    if (!user) {
        throw new Error('User Not Found')
    }

    return (
        <div>
            <h1>Profile</h1>
            {/*@ts-ignore*/}
            <h2>{user?.name}</h2>
            {/*@ts-ignore*/}
            <h6>{user?.email}</h6>
            {/*@ts-ignore*/}
            <Image src={user?.image} alt="Profile Image"/>
        </div>
    )
}
