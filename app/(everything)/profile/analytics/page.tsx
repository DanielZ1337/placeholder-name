import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import {redirect} from "next/navigation";
import getAnalytics from "@/lib/hooks/server/getAnalytics";
import {Avatar} from "@nextui-org/avatar";
import BigBox from "@/components/analytics/big-box";
import ScrollShadowServer from "@/components/ui/ScrollShadowServer";
import WeekBarChart from "@/components/WeekBarChart";
// import {Input} from "@nextui-org/react";

export default async function Page() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/auth/signin')
    }

    const analytics = await getAnalytics(session.user.id)

    if (!analytics || !analytics.analytics || analytics.analytics.length === 0) {
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
                <h1>Analytics</h1>
                <h2>{session.user.name}</h2>
                <h6>{session.user.email}</h6>
                <Avatar src={session.user.image!} alt="Profile Image"/>
                <div className={"flex flex-col gap-2 w-full"}>
                    <div className={"flex flex-col gap-2"}>
                        <BigBox title={'Total Clicks'}>
                            {analytics.analytics.length}
                        </BigBox>
                        <BigBox title={'Total Clicks over the past week'}>
                            <WeekBarChart groupedData={analytics.groupedData}/>
                        </BigBox>
                    </div>
                </div>
            </div>
        </ScrollShadowServer>
    )
}