import {SaveButton} from "@/components/form-button";
import {addNewLink} from "@/lib/actions";

export default function NewLinkInput({title}: { title: string }) {
    return (
        <div className="flex flex-col gap-2">
            <h2 className={'text-2xl font-bold text-muted'}>{title}</h2>
            <form className="flex flex-col gap-2" action={addNewLink}>
                <input type="text" placeholder="Site" name='site'/>
                <input type="text" placeholder="Link" name='link'/>
                <SaveButton/>
            </form>
        </div>
    )
}