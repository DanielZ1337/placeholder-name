import {redisClient} from "@/lib/redis";
import {createLinkKey, Link} from "@/types/links";

export default async function getLinksByProfileID(id:string) {
    return await redisClient.get(createLinkKey(id)) as Link[] | null
}