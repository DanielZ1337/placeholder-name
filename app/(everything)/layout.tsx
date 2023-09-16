import Header from "@/components/header";
import Footer from "@/components/footer";
import {Suspense} from "react";
import {Spinner} from "@nextui-org/spinner";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <Suspense fallback={<Spinner size={"lg"} color={"current"} className={"absolute inset-0 m-auto"}/>}>
            <Header/>
            <div className="flex-1 min-h-[100dvh] lg:px-20 md:px-10 px-5 lg:py-10 md:py-5 py-2 relative">
                <Suspense fallback={<Spinner size={"lg"} color={"current"} className={"absolute inset-0 m-auto"}/>}>
                    {children}
                </Suspense>
            </div>
            <Footer/>
        </Suspense>
    )
}