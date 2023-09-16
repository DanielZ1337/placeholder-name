import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure} from "@nextui-org/react";
import React from "react";
import {AuthButton} from "@/components/login/auth-button";
import {oAuthProviders} from "@/lib/o-auth-providers";

export default function LoginModal() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [loading, setLoading] = React.useState(false)

    return (
        <>
            <Button color="secondary" disabled={loading}
                    isLoading={loading}
                    onClick={onOpen}
            >
                {loading ? undefined : 'Sign In'}
            </Button>
            <Modal backdrop={'blur'} isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className={'text-center'}>Sign In</ModalHeader>
                            <ModalBody>
                                <p className={'text-shdcnmuted-shdcnforeground'}>
                                    Sign in to access your dashboard and manage your links.
                                </p>
                                <div className="grid w-full items-center gap-4">
                                    {oAuthProviders.map((provider) => (
                                        <AuthButton className={"py-6"} key={provider.provider} provider={provider.provider}
                                                    icon={provider.icon} color={"secondary"} variant={"flat"}>Login with {provider.name}</AuthButton>
                                    ))}
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}