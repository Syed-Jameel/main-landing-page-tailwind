import Link from "next/link";

export default function Breadcrumbs() {
    return (

        <nav
            className="flex px-4 py-6 text-gray-700 "
            aria-label="Breadcrumb"
        >
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
                <li className="inline-flex items-center">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 hover:underline hover:underline-offset-4 dark:text-gray-400 dark:hover:text-white"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <div className="flex items-center">
                        <svg
                            className="w-3 h-3 mx-1 text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1}
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                        <Link
                            href="#"
                            className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                        >
                            About 2
                        </Link>
                    </div>
                </li>
            </ol>
        </nav>

    )
}
