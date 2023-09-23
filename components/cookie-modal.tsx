"use client"

import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Switch} from "@nextui-org/react";
import React, {useState} from "react";
import {Cookie} from "lucide-react";
import {DefaultCookiePermissions, useCookieContext} from "@/components/cookie-provider";

export default function CookieModal() {
    const useCookie = useCookieContext()
    const {isOpen, onOpen, onOpenChange, setCookiePermissions, saveCookiePermissions, getCookiePermissions} = useCookie
    const cookies = getCookiePermissions()
    const [preferences, setPreferences] = useState<boolean>(cookies ? cookies.preferences : DefaultCookiePermissions.preferences)
    const [analytics, setAnalytics] = useState<boolean>(cookies ? cookies.analytics : DefaultCookiePermissions.analytics)

    return (
        <Modal
            isOpen={isOpen}
            placement={"bottom"}
            defaultOpen={true}
            size={"5xl"}
            onOpenChange={onOpenChange}
            hideCloseButton
            backdrop={"blur"}
            isDismissable={!!cookies}
            isKeyboardDismissDisabled={!!cookies}
            onClose={() => {
                setCookiePermissions({
                    necessary: true,
                    preferences: preferences,
                    analytics: analytics
                })
                saveCookiePermissions()
            }}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            <h2 className="text-2xl font-bold flex items-center gap-2"><Cookie/>Cookie Policy</h2>
                            <p className="text-sm text-shdcnmuted-shdcnforeground">
                                Manage your cookie settings. You
                                can enable or disable different types of cookies below.
                            </p>
                        </ModalHeader>
                        <ModalBody>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-lg font-bold">Necessary Cookies</h3>
                                    <div className="flex gap-2">
                                        <p className="text-shdcnmuted-shdcnforeground text-sm">
                                            Necessary cookies help make a website usable by enabling basic
                                            functions like page navigation and access to secure areas of the
                                            website. The website cannot function properly without these cookies.
                                        </p>
                                        <Switch size={"lg"} color={"secondary"} isReadOnly defaultSelected/>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-lg font-bold">Preferences</h3>
                                    <div className="flex gap-2">
                                        <p className="text-shdcnmuted-shdcnforeground text-sm">
                                            Preference cookies enable a website to remember information that
                                            changes the way the website behaves or looks, like your preferred
                                            language or the region that you are in.
                                        </p>
                                        <Switch size={"lg"} color={"secondary"} onValueChange={setPreferences}
                                                defaultSelected={preferences}/>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-lg font-bold">Analytics</h3>
                                    <div className="flex gap-2">
                                        <p className="text-shdcnmuted-shdcnforeground text-sm">
                                            Analytics cookies help website owners to understand how visitors
                                            interact with websites by collecting and reporting information
                                            anonymously.
                                        </p>
                                        <Switch size={"lg"} color={"secondary"} onValueChange={setAnalytics}
                                                defaultSelected={analytics}/>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" variant="ghost" onPress={onClose}>
                                Save Preferences
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}