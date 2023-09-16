import {ArrowUpRightSquare, LinkIcon, Merge} from "lucide-react";

const features = [
    {
        iconSvg: <Merge/>,
        title: "One Place for Your Links",
        description: "Gather all your profiles and links in one dashboard, from Facebook to Twitter and more."
    },
    {
        iconSvg: <ArrowUpRightSquare/>,
        title: "Simplify Your Sharing",
        description: "Customize your profile with a picture, bio, and background image. Easily update to keep everyone connected."
    },
    {
        iconSvg: <LinkIcon/>,
        title: "Effortless Link Management",
        description: "Log in, add your links, and Your Social Hub organizes your profiles neatly."
    },
]

export default function Page() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 items-center">
                    <div className="flex flex-col justify-center space-y-8 text-center">
                        <div className="space-y-2 max-w-3xl mx-auto lg:mb-16 xl:mb-20 md:mb-24 mb-12">
                            <h1
                                className="text-5xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-secondary to-secondary-100"
                            >
                                Streamline Your Online Presence, Share with Ease
                            </h1>
                            <p className="max-w-[600px] text-foreground md:text-xl mx-auto text-lg ">
                                Streamline your social media links and effortlessly share your online identity with Your
                                Social Hub – the future of digital curation and sharing.
                            </p>
                        </div>
                        <div
                            className="w-full max-w-sm space-y-4 mx-auto sm:max-w-md md:max-w-none justify-center flex flex-col sm:flex-row sm:space-y-0 sm:space-x-4">
                            <div className="grid gap-8 md:gap-12 lg:gap-16 xl:gap-20 grid-cols-1 md:grid-cols-3">
                                {features.map((feature, index) => (
                                    <FeatureSection key={index} {...feature} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function FeatureSection({iconSvg, title, description}: { iconSvg: React.ReactNode, title: string, description: string }) {
    return (
        <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg sm:p-6 lg:p-8 ">
            <div className="p-3 rounded-full bg-secondary-100 text-secondary">
                {iconSvg}
            </div>
            <h2 className="text-xl font-bold text-foreground">
                {title}
            </h2>
            <p className="text-shdcnmuted-shdcnforeground dark:text-zinc-100">
                {description}
            </p>
        </div>
    );
}
