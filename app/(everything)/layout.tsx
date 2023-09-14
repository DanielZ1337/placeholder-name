import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <>
            <Header/>
            <div className="flex-1 min-h-[100dvh]">{children}</div>
            <Footer/>
        </>
    )
}