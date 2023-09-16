'use client'

import {SaveButton} from "@/components/form-button";
import {addNewLink} from "@/lib/actions";
import LinkProviderSelector from "@/components/link-provider-selector";
import React from "react";
import {Input} from "@nextui-org/react";

export default function NewLinkInput({title}: { title: string }) {
    const [newLinkProvider, setNewLinkProvider] = React.useState('')

    return (
        <div className="flex flex-col gap-2">
            <h2 className={'text-2xl font-bold text-muted'}>{title}</h2>
            <p className={'text-muted'}>Add a new link to your profile.</p>
            <form className="flex flex-col gap-2" action={addNewLink}>
                <input type="text" placeholder="Site" name='site' className={"hidden"} value={newLinkProvider || ''}/>
                <LinkProviderSelector setNewLinkProvider={setNewLinkProvider}/>
                <label htmlFor="link" className="text-secondary text-sm">Link</label>
                <Input type="text" placeholder="https://example.com/yourusername" name='link' required/>
                <SaveButton/>
            </form>
        </div>
    )
}