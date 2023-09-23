export default function SmallBox({title}: { title: string }) {
    return (
        <div className="rounded-lg border border-zinc-200 dark:border-zinc-800" data-id="45">
            <div className="p-4" data-id="46">
                <h3 className="text-md font-medium" data-id="47">
                    {title}
                </h3>
            </div>
            <div className="h-48 bg-zinc-50 dark:bg-zinc-800" data-id="48">
                <span className="sr-only" data-id="49">
                  Weekly Deployment Graph
                </span>
            </div>
        </div>
    )
}