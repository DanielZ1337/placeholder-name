import {sitesNames} from "@/types/link-providers";

export type Links = {
    id: string,
    href: string
    site: sitesNames
}[]

export const linkPrefix = 'link:'

export const createLinkKey = (id: string) => `${linkPrefix}${id}`