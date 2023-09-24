import {sites} from "@/types/link-providers";
import SocialMediaLink from "@/components/social-media-link";
import React from "react";
import getLinksByProfileID from "@/lib/hooks/server/getLinksByProfileID";

export default async function UserProfileLinks({id}: { id: string }) {
    const links = await getLinksByProfileID(id)
    if (!links || Object.keys(links).length === 0) {
        return (
            <div className={"flex flex-col items-center gap-2"}>
                <h6 className={"text-shdcnmuted-shdcnforeground"}>No Links</h6>
            </div>
        )
    }

    return (
        <div className={"flex gap-2 flex-col"}>
            {links && Object.entries(links).map(([link, site]) => {
                const findIcon = Object.values(sites).find(s => s.name.toLowerCase() === site.site.toLowerCase())!
                return (
                    <SocialMediaLink id={id} key={link} href={site.href} icon={<findIcon.icon/>} color={findIcon.color}>
                        {site.site.toLowerCase().at(0)!.toUpperCase() + site.site.toLowerCase().slice(1) + " "}
                    </SocialMediaLink>
                )
            })}
        </div>
    )
}