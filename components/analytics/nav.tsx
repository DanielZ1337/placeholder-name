import Link from "next/link";

export default function Nav() {
    return (
        <div className="hidden border-r bg-zinc-100/40 lg:block dark:bg-zinc-800/40" data-id="2">
            <div className="flex flex-col gap-2" data-id="3">
                <div className="flex h-[60px] items-center px-6" data-id="4">
                    <Link className="flex items-center gap-2 font-semibold" data-id="5" href="#">
                        <svg
                            className=" h-6 w-6"
                            data-id="6"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/>
                            <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"/>
                            <path d="M12 3v6"/>
                        </svg>
                        <span className="" data-id="7">
                Vercel Analytics
              </span>
                    </Link>
                </div>
                <div className="flex-1" data-id="8">
                    <nav className="grid items-start px-4 text-sm font-medium" data-id="9">
                        <Link
                            className="flex items-center gap-3 rounded-lg bg-zinc-100 px-3 py-2 text-zinc-900 transition-all hover:text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:text-zinc-50"
                            data-id="10"
                            href="#"
                        >
                            <svg
                                className=" h-4 w-4"
                                data-id="11"
                                fill="none"
                                height="24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect height="18" rx="2" width="18" x="3" y="3"/>
                                <path d="M9 14v1"/>
                                <path d="M9 19v2"/>
                                <path d="M9 3v2"/>
                                <path d="M9 9v1"/>
                            </svg>
                            Dashboard
                        </Link>
                        <Link
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                            data-id="12"
                            href="#"
                        >
                            <svg
                                className=" h-4 w-4"
                                data-id="13"
                                fill="none"
                                height="24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                                <polyline points="14 2 14 8 20 8"/>
                            </svg>
                            Current Features
                        </Link>
                        <Link
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                            data-id="14"
                            href="#"
                        >
                            <svg
                                className=" h-4 w-4"
                                data-id="15"
                                fill="none"
                                height="24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                            </svg>
                            Recent Activity
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    )
}