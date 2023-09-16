"use client"

import {signOut, useSession} from "next-auth/react"
import {Avatar} from '@nextui-org/avatar'
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from '@nextui-org/dropdown'
import React from 'react'
import {useRouter} from "next/navigation";

export default function AccountDropdown() {
    const {data: session, status} = useSession()
    const router = useRouter()

    if (!session) return null
    if (!session.user) return null
    if (!session.user.image) return null
    if (!session.user.name) return null

    return (
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name={session.user.name}
                    size="sm"
                    src={session.user.image}
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2" onClick={() => router.push('/profile')}>
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">{session.user.email}</p>
                </DropdownItem>
                <DropdownItem key="dashboard" onClick={() => router.push('/profile/dashboard')}>
                    Dashboard
                </DropdownItem>
                <DropdownItem key="analytics" onClick={() => router.push('/profile/analytics')}>
                    Analytics
                </DropdownItem>
                <DropdownItem key="settings" onClick={() => router.push('/profile/settings')} showDivider>
                    Settings
                </DropdownItem>
                <DropdownItem key="logout" color="danger" onClick={() => signOut()}>
                    Log Out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
