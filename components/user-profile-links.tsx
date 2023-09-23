import {sites} from "@/types/link-providers";
import SocialMediaLink from "@/components/social-media-link";
import React from "react";
import {redisClient} from "@/lib/redis";

export default async function UserProfileLinks({id}: { id: string }) {
    const links = await redisClient.hgetall(`user:${id}:links`) as Record<string, string>
    if (!links) {
        return (
            <div className={"flex flex-col items-center gap-2"}>
                <h6 className={"text-shdcnmuted-shdcnforeground"}>No Links</h6>
            </div>
        )
    }
    return (
        <div className={"flex gap-2 flex-col"}>
            {links && Object.entries(links).map(([link, site]) => {
                const findIcon = Object.values(sites).find(s => s.name.toLowerCase() === site.toLowerCase())!
                return (
                    <SocialMediaLink id={id} key={link} href={link} icon={<findIcon.icon/>} color={findIcon.color}>
                        {site.toLowerCase().at(0)!.toUpperCase() + site.toLowerCase().slice(1) + " "}
                    </SocialMediaLink>
                )
            })}
        </div>
    )
}