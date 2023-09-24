'use client'

import {redirect} from "next/navigation";
import {Avatar} from "@nextui-org/avatar";
import {useSession} from "next-auth/react";
import {Divider} from "@nextui-org/divider";
import ScrollShadowServer from "@/components/ui/ScrollShadowServer";
import {useIntersectionObserver} from "@uidotdev/usehooks"
import React, {SetStateAction, useEffect, useState} from "react";
import {cn} from "@/lib/utils";

export default function Page() {
    const {data: session} = useSession()
    const [currentSection, setCurrentSection] = useState<string>('Preferences')
    const rootRef = React.useRef<HTMLDivElement>(null)
    const navRef = React.useRef<HTMLDivElement>(null)
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setIsMobile(window.innerWidth < 768)
        })
        return () => {
            window.removeEventListener('resize', () => {
                setIsMobile(window.innerWidth < 768)
            })
        }
    }, [])

    if (!session) {
        redirect('/auth/signin')
    }

    return (
        <div className={"h-full w-full"}>
            <div className={"flex flex-col items-center"}>
                <div
                    className={"flex flex-row gap-2 md:gap-6 w-full justify-between items-center mb-4 md:justify-end p-4"}>
                    <div className={"flex flex-col gap-2"}>
                        <h1 className={"text-2xl font-bold text-foreground"}>Settings for {session.user.name}</h1>
                        <h2 className={"text-shdcnmuted-shdcnforeground"}>{session.user.email}</h2>
                    </div>
                    <Avatar src={session.user.image!}
                            className={"border-[4px] border-secondary h-auto xl:w-[100px] md:w-[100px] w-[80px] lg:w-[100px]"}
                            alt={session.user.name!}/>
                </div>
            </div>
            <div className={"flex flex-col gap-4 items-center w-full h-full p-4 md:p-12 bg-foreground-50 rounded-xl"}>
                <h1 className={"text-2xl font-bold text-foreground p-4 md:p-0 md:mb-4 md:mt-0 mt-4"}>
                    Take control of your account
                </h1>
                <div className={"flex md:flex-row flex-col gap-4 w-full"}>
                    <nav
                        className={"flex md:flex-col flex-row gap-4 md:gap-2 w-full md:w-1/6 px-2 md:px-0 overflow-x-hidden md:overflow-y-hidden"} ref={navRef}>
                        <SettingsNavTitle currentSection={currentSection} title={"Preferences"} navbarRef={navRef}/>
                        <Divider orientation={isMobile ? 'vertical' : 'horizontal'}
                                 className={cn(isMobile ? 'h-6' : '')}/>
                        <SettingsNavTitle currentSection={currentSection} title={"Account"} navbarRef={navRef}/>
                        <Divider orientation={isMobile ? 'vertical' : 'horizontal'}
                                 className={cn(isMobile ? 'h-6' : '')}/>
                        <SettingsNavTitle currentSection={currentSection} title={"Security"} navbarRef={navRef}/>
                        <Divider orientation={isMobile ? 'vertical' : 'horizontal'}
                                 className={cn(isMobile ? 'h-6' : '')}/>
                        <SettingsNavTitle currentSection={currentSection} title={"Billing"} navbarRef={navRef}/>
                        <Divider orientation={isMobile ? 'vertical' : 'horizontal'}
                                 className={cn(isMobile ? 'h-6' : '')}/>
                        <SettingsNavTitle currentSection={currentSection} title={"Notifications"} navbarRef={navRef}/>
                        <Divider orientation={isMobile ? 'vertical' : 'horizontal'}
                                 className={cn(isMobile ? 'h-6' : '')}/>
                        <SettingsNavTitle currentSection={currentSection} title={"Integrations"} navbarRef={navRef}/>
                        <Divider orientation={isMobile ? 'vertical' : 'horizontal'}
                                 className={cn(isMobile ? 'h-6' : '')}/>
                        <SettingsNavTitle currentSection={currentSection} title={"API"} navbarRef={navRef}/>
                        <Divider orientation={isMobile ? 'vertical' : 'horizontal'}
                                 className={cn(isMobile ? 'h-6' : '')}/>
                        <SettingsNavTitle currentSection={currentSection} title={"Advanced"} navbarRef={navRef}/>
                        <Divider orientation={isMobile ? 'vertical' : 'horizontal'}
                                 className={cn(isMobile ? 'h-6' : '')}/>
                    </nav>
                    <Divider orientation={"vertical"} className={"hidden md:block h-[55vh]"}/>
                    <ScrollShadowServer hideScrollBar
                                        className={"flex flex-col gap-4 w-full h-[55vh] py-2 overflow-y-auto"}
                                        ref={rootRef}>
                        <SettingsCardSection root={rootRef} setCurrentSection={setCurrentSection} title={"Preferences"}>
                                <h6 className={"text-shdcnmuted-shdcnforeground"}>Theme</h6>
                                <Divider/>
                                <h6 className={"text-shdcnmuted-shdcnforeground"}>Language</h6>
                                <Divider/>
                                <h6 className={"text-shdcnmuted-shdcnforeground"}>Timezone</h6>
                                <Divider/>
                                <h6 className={"text-shdcnmuted-shdcnforeground"}>Date Format</h6>
                                <Divider/>
                                <h6 className={"text-shdcnmuted-shdcnforeground"}>Time Format</h6>
                                <Divider/>
                                <h6 className={"text-shdcnmuted-shdcnforeground"}>Currency</h6>
                                <Divider/>
                                <h6 className={"text-shdcnmuted-shdcnforeground"}>Country</h6>
                                <Divider/>
                                <h6 className={"text-shdcnmuted-shdcnforeground"}>Temperature</h6>
                        </SettingsCardSection>
                        <SettingsCardSection root={rootRef} setCurrentSection={setCurrentSection} title={"Account"}>
                                <h6 className={"text-shdcnmuted-shdcnforeground"}>Name</h6>
                                <Divider/>
                                <h6 className={"text-shdcnmuted-shdcnforeground"}>Email</h6>
                                <Divider/>
                                <h6 className={"text-shdcnmuted-shdcnforeground"}>Password</h6>
                                <Divider/>
                                <h6 className={"text-shdcnmuted-shdcnforeground"}>Phone</h6>
                                <Divider/>
                                <h6 className={"text-shdcnmuted-shdcnforeground"}>Address</h6>
                        </SettingsCardSection>
                        <SettingsCardSection root={rootRef} setCurrentSection={setCurrentSection} title={"Security"}>
                                <h6 className={"text-shdcnmuted-shdcnforeground"}>Two-Factor Authentication</h6>
                                <Divider/>
                                <h6 className={"text-shdcnmuted-shdcnforeground"}>Password</h6>
                                <Divider/>
                                <h6 className={"text-shdcnmuted-shdcnforeground"}>Phone</h6>
                                <Divider/>
                                <h6 className={"text-shdcnmuted-shdcnforeground"}>Address</h6>
                        </SettingsCardSection>
                        <SettingsCardSection root={rootRef} setCurrentSection={setCurrentSection} title={"Billing"}>
                                <h6 className={"text-shdcnmuted-shdcnforeground"}>Name</h6>
                                <Divider/>
                                <h6 className={"text-shdcnmuted-shdcnforeground"}>Email</h6>
                        </SettingsCardSection>
                        <SettingsCardSection root={rootRef} setCurrentSection={setCurrentSection} title={"Notifications"}>
                                <h6 className={"text-shdcnmuted-shdcnforeground"}>Name</h6>
                                <Divider/>
                                <h6 className={"text-shdcnmuted-shdcnforeground"}>Email</h6>
                        </SettingsCardSection>
                        <SettingsCardSection root={rootRef} setCurrentSection={setCurrentSection} title={"Integrations"}>
                                <h6 className={"text-shdcnmuted-shdcnforeground"}>Name</h6>
                                <Divider/>
                                <h6 className={"text-shdcnmuted-shdcnforeground"}>Email</h6>
                        </SettingsCardSection>
                        <SettingsCardSection root={rootRef} setCurrentSection={setCurrentSection} title={"API"}>
                                <h6 className={"text-shdcnmuted-shdcnforeground"}>Name</h6>
                                <Divider/>
                                <h6 className={"text-shdcnmuted-shdcnforeground"}>Email</h6>
                        </SettingsCardSection>
                        <SettingsCardSection root={rootRef} setCurrentSection={setCurrentSection} title={"Advanced"}>
                                <h6 className={"text-shdcnmuted-shdcnforeground"}>Name</h6>
                                <Divider/>
                                <h6 className={"text-shdcnmuted-shdcnforeground"}>Email</h6>
                        </SettingsCardSection>
                    </ScrollShadowServer>
                </div>
            </div>
        </div>
    )
}

function SettingsCardSection({title, children, setCurrentSection, root}: {
    title: string,
    children: React.ReactNode,
    setCurrentSection?: React.Dispatch<SetStateAction<string>>,
    root?: React.RefObject<HTMLDivElement>
}) {
    const [ref, entry] = useIntersectionObserver({
        threshold: 0,
        root: root?.current,
    }) as [React.RefObject<HTMLDivElement>, IntersectionObserverEntry | null]

    useEffect(() => {
        if (entry?.isIntersecting) {
            setCurrentSection?.(title)
        }
    }, [entry, setCurrentSection, title]);

    return (
        <div className={"p-4 md:p-8 bg-foreground-100 rounded-xl shadow-xl w-full h-max"}>
            <h1 ref={ref} className={"text-2xl font-bold text-foreground"}>{title}</h1>
            <div className={"flex flex-col gap-4 w-full h-full"}>
                {children}
            </div>
        </div>
    )
}

function SettingsNavTitle({currentSection, title, navbarRef}: { currentSection: string, title: string, navbarRef?: React.RefObject<HTMLDivElement> }) {
    const ref = React.useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        if (ref.current && currentSection === title) {
            navbarRef?.current?.scrollTo({
                left: ref.current.offsetLeft - 50,
                behavior: 'smooth'
            })
        }
    }, [currentSection])

    return (
        <h6 ref={ref}
            className={"text-shdcnmuted-shdcnforeground data-[active=true]:text-foreground data-[active=true]:font-bold hover:text-foreground cursor-pointer hover:font-bold transition-all duration-200 hover:drop-shadow-[0_0px_5px_rgba(100,100,100,0.5)]"}
            data-active={currentSection === title}
        >
            {title}
        </h6>
    )
}