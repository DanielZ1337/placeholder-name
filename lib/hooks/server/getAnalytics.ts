import {createLinkAnalyticsKey, linkAnalyticsPrefix} from "@/types/analytics";

'server-only'

import {redisClient} from "@/lib/redis";

interface DataItem {
    date: number;
    user_agent: string;
    geo: {
        ip: string;
        success: boolean;
        type: string;
        continent: string;
        continent_code: string;
        country: string;
        country_code: string;
        region: string;
        region_code: string;
        city: string;
        latitude: number;
        longitude: number;
        is_eu: boolean;
        postal: string;
        calling_code: string;
        capital: string;
        borders: string;
        flag: {
            img: string;
            emoji: string;
            emoji_unicode: string;
        };
        connection: {
            asn: number;
            org: string;
            isp: string;
            domain: string;
        };
        timezone: {
            id: string;
            abbr: string;
            is_dst: boolean;
            offset: number;
            utc: string;
            current_time: string;
        };
    };
}

export default async function getAnalytics(id: string) {
    const linkAnalyticsKeys = await redisClient.keys(createLinkAnalyticsKey(id, '*'))

    const analytics = await Promise.all(linkAnalyticsKeys.map(async (key) => {

        return {
            key,
            data: await redisClient.smembers(key) as DataItem[]
        }
    }))

    // console.log('analytics', analytics)

    if (!analytics) return


    const analyticsDataFlat = analytics.flat()

    const sortedData = analytics.map((item) => ({
        key: item.key,
        data: item.data.slice().sort((a, b) => a.date - b.date),
    }));

    type GroupedData = {
        [date: string]: DataItem[]; // Use string as the key for formatted date
    };


    // Group the sorted data by formatted date
    const groupedData: GroupedData = {};
    sortedData.forEach((item) => {
        item.data.forEach((dataItem) => {
            const date = new Date(dataItem.date);
            const options = {year: '2-digit', month: '2-digit', day: '2-digit'} as Intl.DateTimeFormatOptions
            const formattedDate = new Intl.DateTimeFormat('en-UK', options).format(date);
            if (!groupedData[formattedDate]) {
                groupedData[formattedDate] = [];
            }
            groupedData[formattedDate].push(dataItem);
        });
    });


    return {
        groupedData,
        analyticsDataFlat,
        analytics,
        sortedData
    }
}