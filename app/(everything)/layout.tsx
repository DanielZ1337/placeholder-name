import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <>
            <Header/>
            <div className="flex-1 min-h-[100dvh] lg:px-20 md:px-10 px-5 lg:py-10 md:py-5 py-2">
                {children}
            </div>
            <Footer/>
        </>
    )
}