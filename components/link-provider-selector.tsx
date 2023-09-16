'use client'

import React from "react";
import {Select, SelectItem} from "@nextui-org/react";
import {sites} from "@/lib/link-site-providers";


export default function LinkProviderSelector({setNewLinkProvider}: { setNewLinkProvider: React.Dispatch<React.SetStateAction<string>> }) {

    return (
        <Select
            items={Object.values(sites)}
            label="Select a platform"
            placeholder="e.g Twitter"
            labelPlacement="outside"
            className="max-w-xs"
            color={"secondary"}
            onSelectionChange={(value) => {
                setNewLinkProvider((new Set(value)).values().next().value.toLowerCase())
            }}
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
