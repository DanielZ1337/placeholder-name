import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import {redirect} from "next/navigation";
import Image from "next/image";
import NewLinkInput from "@/components/new-link-input";
import {Avatar} from "@nextui-org/avatar";

export default async function Page() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/auth/signin')
    }

    return (
        <div>
            <h1>Profile</h1>
            <h2>{session?.user?.name}</h2>
            <h6>{session?.user?.email}</h6>
            <Avatar src={session?.user?.image!} alt="Profile Image" />
            <NewLinkInput title={'Add New Link'}/>
        </div>
    )
}