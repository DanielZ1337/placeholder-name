import {sites} from "@/lib/link-site-providers";
import SocialMediaLink from "@/components/social-media-link";
import React from "react";
import {redisClient} from "@/lib/redis";

export default async function UserProfileLinks({id}: { id: string }) {
    const links = await redisClient.hgetall(`user:${id}:links`) as Record<string, string>
    if (!links) {
        throw new Error('Links Not Found')
    }
    return (
        <div className={"flex gap-2 flex-col"}>
            {links && Object.entries(links).map(([link, site]) => {
                const findIcon = Object.values(sites).find(s => s.name.toLowerCase() === site.toLowerCase())!
                return (
                    <SocialMediaLink key={link} href={link} icon={<findIcon.icon/>} color={findIcon.color}>
                        {site.toLowerCase().at(0)!.toUpperCase() + site.toLowerCase().slice(1) + " "}
                    </SocialMediaLink>
                )
            })}
        </div>
    )
}