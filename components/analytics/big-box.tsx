export default function BigBox({title, children}: { title: string, children: React.ReactNode }) {
    return (
        <div className="rounded-lg border border-zinc-200 dark:border-zinc-800" data-id="24">
            <div className="p-4" data-id="25">
                <h2 className="text-lg font-medium" data-id="26">
                    {title}
                </h2>
            </div>
            <div className="h-72 bg-zinc-50 dark:bg-zinc-800" data-id="27">
                {children}
                <span className="sr-only" data-id="28">
                    Monthly Deployment Graph
                </span>
            </div>
        </div>
    )
}