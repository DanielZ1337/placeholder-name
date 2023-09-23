import {NextRequest, NextResponse} from "next/server";
import {authOptions} from "@/lib/auth";
import {getServerSession} from "next-auth";
import {Analytics, createLinkAnalyticsKey} from "@/types/analytics";

export async function POST(Request: NextRequest, Response: NextResponse) {
    if (!Request.body) return NextResponse.json({error: 'No body provided'}, {status: 400})
    const req = await Request.json()
    const {id, href, date, geo} = req as Analytics
    if (!id || !href || !date || !geo) return NextResponse.json({error: 'Missing required fields'}, {status: 400})


    const session = await getServerSession(authOptions)
    if (!session) return NextResponse.json({error: 'Not authenticated'}, {status: 401})
    if (!session.user) return NextResponse.json({error: 'No user found'}, {status: 401})
    if (!session.user.id) return NextResponse.json({error: 'No user id found'}, {status: 401})
    if (session.user.id !== id) return NextResponse.json({error: 'Not authorized'}, {status: 403})

    const linkAnalyticsKey = createLinkAnalyticsKey(id, href)

    try {
        const {redisClient} = await import('@/lib/redis')

        const analyticsPayload = {
            id,
            date,
            user_agent: Request.headers.get('user-agent') ?? undefined,
            geo,
            href
        } satisfies Analytics

        await redisClient.sadd(linkAnalyticsKey, analyticsPayload)

        return NextResponse.json({success: true}, {status: 200})
    } catch (error) {
        console.log('error', error)
        return NextResponse.json({error: 'Something went wrong'}, {status: 500})
    }
}