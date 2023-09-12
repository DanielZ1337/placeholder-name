"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { Avatar } from '@nextui-org/avatar'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown'
import React from 'react'
import { Button } from "@nextui-org/react"

export default function AccountDropdown() {
    const { data: session, status } = useSession()
    const [loading, setLoading] = React.useState(false)

    function handleLogin() {
        setLoading(true)
        signIn('github').then(() => {
            setLoading(false)
        })
    }

    if (status === "loading") return null
    if (status === "unauthenticated") {
        return <Button color="secondary" onClick={handleLogin} disabled={loading} isLoading={loading}>{loading ? undefined : 'Sign In'}</Button>
    }
    if (!session) return null
    if (!session.user) return null
    if (!session.user.image) return null

    return (
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name="Jason Hughes"
                    size="sm"
                    src={session.user.image}
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">{session.user.email}</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                <DropdownItem key="logout" color="danger" onClick={() => signOut()}>
                    Log Out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
