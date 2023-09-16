import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import {redirect} from "next/navigation";
import NewLinkInput from "@/components/new-link-input";
import {Avatar} from "@nextui-org/avatar";
import {Card} from "@nextui-org/card";

export default async function Page() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/auth/signin')
    }

    return (
        <div className={"flex flex-col items-center"}>
            <Card className={'flex flex-col items-center gap-2 p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4'}>
                <div className="flex flex-col items-center gap-2 w-full">
                    <h1>Profile</h1>
                    <h2>{session.user.name}</h2>
                    <h6>{session.user.email}</h6>
                    <Avatar src={session.user.image!} alt="Profile Image"/>
                    <NewLinkInput title={'Add New Link'}/>
                </div>
            </Card>
        </div>
    )
}