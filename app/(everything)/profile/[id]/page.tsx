import {redisClient} from '@/lib/redis'
import React, {Suspense} from 'react'
import {User} from "next-auth";
import {Card} from "@nextui-org/card";
import {Avatar} from "@nextui-org/avatar";
import UserProfileLinks from "@/components/user-profile-links";
import ShareLink from "@/components/share-link";
import {siteConfig} from "@/lib/site";
import {notFound} from "next/navigation";
import PlaceholderImage from "@/components/icons/placeholder-image";

/*export async function generateStaticParams() {
    const newClient = Redis.fromEnv({
        cache: "reload",
    })
    const users = await newClient.smembers('users')
    return users.map(user => ({params: {id: user}}))
}*/

// export const revalidate = 60

export default async function Page({params}: { params: { id: string } }) {
    const user = await redisClient.get(`user:${params.id}`) as User

    const name = user.name ? user.name : 'User'

    if (!user) {
        notFound()
    }

    return (
        <div className={"flex flex-col items-center text-center justify-center"}>
            <Card
                className={"px-4 py-10 flex flex-col items-center gap-2 lg:w-1/3 2xl:w-1/4 md:w-1/2 w-full lg:px-10 md:px-5 text-center relative"}>
                <ShareLink className={"absolute top-2 right-2"} url={`${siteConfig.url}profile/${params.id}`}/>
                {user.image ? (
                    <Avatar name={name} src={user.image}
                            className={"h-auto xl:w-1/5 md:w-1/5 w-1/4 lg:w-1/3 border-[4px] border-secondary mb-[21px]"}
                            alt={name}/>
                ) : (
                    <PlaceholderImage
                        className={"p-2 rounded-full h-auto xl:w-1/5 md:w-1/5 w-1/4 lg:w-1/3 border-[4px] border-secondary mb-[21px]"}/>
                )}
                <h1 className={"lg:text-2xl text-xl font-bold text-foreground text-center"}>{user.name}</h1>
                <h2 className={"text-center lg:text-lg text-base font-medium text-shdcnmuted-shdcnforeground overflow-ellipsis break-all mb-4"}>{user.email}</h2>
                <Suspense fallback={<div>Loading...</div>}>
                    <UserProfileLinks id={params.id}/>
                </Suspense>
            </Card>
        </div>
    )
}
