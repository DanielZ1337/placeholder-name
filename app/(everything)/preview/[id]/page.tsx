import {authOptions} from "@/lib/auth";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";

export default async function Page({params}: { params: { id: string } }) {
    const {id} = params
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/auth/signin')
    } else if (session.user?.id !== id) {
        redirect(`/preview/${session.user?.id}`)
    }

    return (
        <div className={"flex flex-col items-center"}>
            <h1>Preview</h1>
            <h2>{session?.user?.name}</h2>
            <h6>{session?.user?.email}</h6>
            <img src={session?.user?.image!} alt="Profile Image"/>
        </div>
    )
}