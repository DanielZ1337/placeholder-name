export default function Component() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48" >
            <div className="container px-4 md:px-6" >
                <div className="grid gap-6 items-center" >
                    <div className="flex flex-col justify-center space-y-8 text-center" >
                        <div className="space-y-2 max-w-3xl mx-auto lg:mb-16 xl:mb-20 md:mb-24 mb-12" >
                            <h1
                                className="text-5xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-secondary to-secondary-100"
                            >
                                Streamline Your Online Presence, Share with Ease
                            </h1>
                            <p className="max-w-[600px] text-foreground md:text-xl mx-auto text-lg " >
                                Streamline your social media links and effortlessly share your online identity with Your Social Hub – the future of digital curation and sharing.
                            </p>
                        </div>
                        <div className="w-full max-w-sm space-y-4 mx-auto sm:max-w-md md:max-w-none justify-center flex flex-col sm:flex-row sm:space-y-0 sm:space-x-4" >
                            <div className="grid gap-8 md:gap-12 lg:gap-16 xl:gap-20 grid-cols-1 md:grid-cols-3" >

                                {/* Replace with your first feature section */}
                                <FeatureSection
                                    iconSvg={
                                        <svg
                                            className=" text-secondary h-6 w-6 "
                                            fill="none"
                                            height="24"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                                            <path
                                                d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
                                            />
                                        </svg>
                                    }
                                    title="Smart Inbox"
                                    description="Our Smart Inbox feature helps you manage your emails efficiently by prioritizing important emails."
                                />

                                {/* Replace with your second feature section */}
                                <FeatureSection
                                    iconSvg={
                                        <svg
                                            className=" text-secondary h-6 w-6 "
                                            fill="none"
                                            height="24"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="m8 6 4-4 4 4" />
                                            <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
                                            <path d="m20 22-5-5" />
                                        </svg>
                                    }
                                    title="Seamless Integration"
                                    description="Seamless Integration allows you to connect with your favorite apps and services without leaving your inbox."
                                />

                                {/* Replace with your third feature section */}
                                <FeatureSection
                                    iconSvg={
                                        <svg
                                            className=" text-secondary h-6 w-6 "
                                            fill="none"
                                            height="24"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="11" cy="11" r="8" />
                                            <path d="m21 21-4.3-4.3" />
                                        </svg>
                                    }
                                    title="Advanced Customization"
                                    description="With Advanced Customization, you can personalize your email client to suit your preferences and work style."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// FeatureSection Component
function FeatureSection({ iconSvg, title, description }:{iconSvg: React.ReactNode, title: string, description: string}) {
    return (
        <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg sm:p-6 lg:p-8 " >
            <div className="p-3 rounded-full bg-secondary-100" >
                {iconSvg}
            </div>
            <h2 className="text-xl font-bold text-foreground" >
                {title}
            </h2>
            <p className="text-shdcnmuted-shdcnforeground dark:text-zinc-100" >
                {description}
            </p>
        </div>
    );
}
