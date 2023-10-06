import Link from "next/link";
import { useState } from "react";

export const blogNavItems = [
    {
        label: "Home1",
        icon: 'bi-house',
        href: "/home1",
    },
    {
        label: "Home2",
        icon: 'bi-house',
        href: "/home2",
    },
    {
        label: "About1",
        icon: 'bi-file-earmark-person',
        href: "/about1",
    },
    {
        label: "About2",
        icon: 'bi-file-earmark-person',
        href: "/about2",
    },
    {
        label: "Service1",
        icon: 'bi-hdd-rack',
        href: "/service1",
    },
    {
        label: "Blog1",
        icon: 'bi-substack',
        href: "/blog1",
    },
    {
        label: "Blog2",
        icon: 'bi-substack',
        href: "/blog2",
    },
    {
        label: "Contact1",
        icon: 'bi-person',
        href: "/contact1",
    },
    {
        label: "Contact2",
        icon: 'bi-person',
        href: "/contact2",
    },
];


export default function Nav() {
    const [open, setOpen] = useState(false)

    const handleNav = () => {
        setOpen(!open)
    }

    return (

        <>
            <div className="bg-white hidden md:block -mt-2 h-full  space-y-10 rounded-xl">
                <div>
                    {
                        blogNavItems.map((item, index) => (
                            <div key={index} className="border-b-2 border-gray-200 py-1">
                                <Link href={item.href} className="group block bg-gray-100 hover:bg-indigo-500 transition duration-300 text-gray-700 hover:text-white  px-4 py-2  rounded-md" >
                                    <div className="flex justify-start items-center space-x-4">
                                        <span className="text-base font-semibold">{item.label}</span>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>

            <button onClick={handleNav} className="block w-full md:hidden  bg-indigo-500 rounded-xl px-4 py-3 "><i className="bi bi-chevron-double-down text-white text-xl font-bold"></i></button>

            {
                open ? <div className="bg-white h-full space-y-10 rounded-xl">

                    <div>
                        {
                            blogNavItems.map((item, index) => (
                                <div key={index} onClick={handleNav} className="border-b-2 border-gray-200 py-2">
                                    <Link href={item.href} className="group block bg-gray-100 hover:bg-indigo-500 transition duration-300 text-gray-700 hover:text-white  px-4 py-2  rounded-md" >
                                        <div className="flex justify-start items-center space-x-4">
                                            <span className="text-base font-semibold">{item.label}</span>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div> : null
            }



        </>

    )
}
