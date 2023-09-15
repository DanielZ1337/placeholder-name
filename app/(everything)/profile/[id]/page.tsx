import {redisClient} from '@/lib/redis'
import React from 'react'
import {User} from "next-auth";
import {Card} from "@nextui-org/card";
import {Avatar} from "@nextui-org/avatar";
import Link from "next/link";
import SocialMediaLink from "@/components/social-media-link";
import {GithubIcon, LinkedinIcon} from "lucide-react";
import Google from "next-auth/providers/google";
import {IoLogoGoogle} from "react-icons/io";

export async function generateStaticParams() {
    const users = await redisClient.smembers('users')
    return users.map(user => ({params: {id: user}}))
}

const socialMediaLinks = [
    {
        name: "Github",
        url: "https://github.com/brandonharrisondev",
        icon: <IoLogoGoogle/>
    },
    {
        name: "Twitter",
        url: "https://twitter.com/brandonharrison",
        icon: <GithubIcon/>
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/brandonharrisondev",
        icon: <LinkedinIcon/>
    },
]

export default async function Page({params}: { params: { id: string } }) {
    const user = await redisClient.get(`user:${params.id}`) as User

    if (!user) {
        throw new Error('User Not Found')
    }

    return (
        <div className={"flex flex-col items-center"}>
            <Card className={"px-4 py-10 flex flex-col items-center gap-2 lg:w-1/3 xl:w-1/4 md:w-1/2 w-full lg:px-10 md:px-5"}>
                <Avatar src={user.image!} className={"h-auto xl:w-1/5 md:w-1/5 w-1/4 lg:w-1/3 border-[4px] border-secondary mb-[21px]"}/>
                <h1 className={"lg:text-2xl text-xl font-bold text-foreground"}>{user.name}</h1>
                <h2 className={"lg:text-lg text-base font-medium text-shdcnmuted-shdcnforeground overflow-ellipsis break-all"}>{user.email}</h2>
                <div className={"flex gap-2 flex-col"}>
                    {socialMediaLinks.map((link, index) => (
                        <SocialMediaLink key={index} href={link.url} icon={link.icon} color={"#8484df"}>
                            {link.name}
                        </SocialMediaLink>
                    ))}
                </div>
            </Card>
        </div>
    )
}
