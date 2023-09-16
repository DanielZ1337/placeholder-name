import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import {redirect} from "next/navigation";

export default async function Page() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/auth/signin')
    }

    return (
        <div className={"flex flex-col items-center"}>
            <h1>Dashboard</h1>
            <h2>{session?.user?.name}</h2>
            <h6>{session?.user?.email}</h6>
            <img src={session?.user?.image!} alt="Profile Image"/>
        </div>
    )
}