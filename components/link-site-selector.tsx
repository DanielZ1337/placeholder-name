'use client'

import React from "react";
import {Select, SelectItem} from "@nextui-org/react";
import {sites} from "@/types/link-providers";
import {Link} from "@/types/links";


export default function LinkSiteSelector({setNewLinkSite, defaultSelected}: {
    setNewLinkSite: React.Dispatch<React.SetStateAction<Link["site"] | undefined>>
    defaultSelected?: Link["site"]
}) {

    const findDefaultSelectedObject = Object.values(sites).find(s => s.name.toLowerCase() === defaultSelected?.toLowerCase())!
    return (
        <Select
            items={Object.values(sites)}
            label="Select a platform"
            placeholder="e.g Twitter"
            labelPlacement="outside"
            className="max-w-xs"
            color={"secondary"}
            onSelectionChange={(value) => {
                setNewLinkSite((new Set(value)).values().next().value.toLowerCase())
            }}
            {...(defaultSelected ? {defaultSelectedKeys: [findDefaultSelectedObject.name]} : {})}
            renderValue={(value) => {
                const site = value[0].data!
                return (
                    <div key={site.name} className="flex items-center gap-2">
                        <site.icon className="w-5 h-5"/>
                        <span>{site.name}</span>
                    </div>
                )
            }}
        >
            {(site) => (
                <SelectItem key={site.name} textValue={site.name} startContent={<site.icon className="w-5 h-5"/>}
                            value={site.name}>
                    <span>{site.name}</span>
                </SelectItem>
            )}
        </Select>
    );
}
