import Link from "next/link";

export default function LinksBox({title}: { title: string }) {


    return (
        <div className="rounded-lg border border-zinc-200 dark:border-zinc-800" data-id="60">
            <div className="p-4" data-id="61">
                <h2 className="text-lg font-medium" data-id="62">
                    {title}
                </h2>
                <ul className="list-disc list-inside mt-2" data-id="63">
                    <li data-id="64">
                        <Link className="text-zinc-700 dark:text-zinc-200 hover:underline" data-id="65"
                              href="#">
                            Deployed
                            <span className="font-bold" data-id="66">
                      site1
                    </span>
                            at 1:23 PM
                        </Link>
                    </li>
                    <li data-id="67">
                        <Link className="text-zinc-700 dark:text-zinc-200 hover:underline" data-id="68"
                              href="#">
                            Deployed
                            <span className="font-bold" data-id="69">
                      site2
                    </span>
                            at 12:45 PM
                        </Link>
                    </li>
                    <li data-id="70">
                        <Link className="text-zinc-700 dark:text-zinc-200 hover:underline" data-id="71"
                              href="#">
                            Error on
                            <span className="font-bold" data-id="72">
                      site3
                    </span>
                            at 12:30 PM
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}