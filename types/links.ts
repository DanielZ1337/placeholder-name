import {sitesNames} from "@/types/link-providers";
export type Link = {
    id: number,
    href: string
    site: sitesNames
}

export const linkPrefix = 'link:'

export const createLinkKey = (id: string) => `${linkPrefix}${id}`