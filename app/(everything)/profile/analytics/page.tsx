import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import {redirect} from "next/navigation";
import getAnalytics from "@/lib/hooks/server/getAnalytics";
import {Avatar} from "@nextui-org/avatar";
import BigBox from "@/components/analytics/big-box";
import ScrollShadowServer from "@/components/ui/ScrollShadowServer";
import WeekBarChart from "@/components/week-bar-chart";
import {createLinkAnalyticsKey, createVisitAnalyticsKey} from "@/types/analytics";
// import {Input} from "@nextui-org/react";

export default async function Page() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/auth/signin')
    }
    const clickAnalytics = await getAnalytics(createLinkAnalyticsKey(session.user.id, '*'))
    const viewAnalytics = await getAnalytics(createVisitAnalyticsKey(session.user.id, '*'))

    if (!clickAnalytics || !clickAnalytics.analytics || clickAnalytics.analytics.length === 0 || !viewAnalytics || !viewAnalytics.analytics || viewAnalytics.analytics.length === 0) {
        return (
            <div className={"flex flex-col items-center"}>
                <h1>Analytics</h1>
                <h2>{session.user.name}</h2>
                <h6>{session.user.email}</h6>
                <Avatar src={session.user.image!} alt="Profile Image"/>
                <div className={"flex flex-col gap-2"}>
                    <h6 className={"text-shdcnmuted-shdcnforeground"}>No Analytics</h6>
                </div>
            </div>
        )
    }

    return (
        <ScrollShadowServer hideScrollBar={false} className="h-full max-h-screen border-none">
            <div className={"flex flex-col items-center"}>
                <div className={"flex flex-row gap-2 md:gap-6 w-full justify-between items-center mb-4 md:justify-end p-4"}>
                    <div className={"flex flex-col gap-2"}>
                    <h1 className={"text-2xl font-bold text-foreground"}>Analytics for {session.user.name}</h1>
                    <h2>{session.user.email}</h2>
                    </div>
                    <Avatar src={session.user.image!} size={"lg"} alt="Profile Image"/>
                </div>
                <div className={"flex flex-col gap-2 w-full"}>
                    <BigBox title={'Total Clicks over the past week'}>
                        <WeekBarChart groupedData={clickAnalytics.groupedData} datakey={"clicks"}/>
                        {/*<div className={"flex flex-row gap-2 w-1/2"}>
                            <h1 className={"text-2xl font-bold text-foreground"}>{clickAnalytics.analytics.length}</h1>
                            <h6 className={"text-shdcnmuted-shdcnforeground"}>Clicks</h6>
                            <PercentageBadge
                                variant={"positive"}>+{clickAnalytics.analytics.length / 100}%</PercentageBadge>
                        </div>*/}
                    </BigBox>
                    <BigBox title={'Total Views over the past week'}>
                        <WeekBarChart groupedData={viewAnalytics.groupedData} datakey={"views"}/>
                        {/*<div className={"flex flex-row gap-2 w-1/2"}>
                            <h1 className={"text-2xl font-bold text-foreground"}>{viewAnalytics.analytics.length}</h1>
                            <h6 className={"text-shdcnmuted-shdcnforeground"}>Clicks</h6>
                            <PercentageBadge
                                variant={"positive"}>+{viewAnalytics.analytics.length / 100}%</PercentageBadge>
                        </div>*/}
                    </BigBox>
                </div>
            </div>
        </ScrollShadowServer>
    )
}