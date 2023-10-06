"use client";
import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavHoverDropdown from "./NavHoverDropdown";
import { navigationItems } from "./navigationItems";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

export default function Navbar() {

  const [show, setShow] = useState(false);
  const [label, setLabel] = useState("");

  const pathname = usePathname(null);

  useEffect(() => {
    navigationItems.map((item) => ({
      ...item,
      current: false,
    }));

    const parentItem = navigationItems.find((item) =>
      item.sublinks.some((sublink) => sublink.href === pathname)
    );

    if (parentItem) {
      parentItem.current = true;
    }

  }, [pathname])

  return (


    <Disclosure as="nav">
      {({ open }) => (
        <div>
          <div className="h-20 flex items-center justify-between">
            <div className="flex items-center flex-shrink-0 ">

              {/* Mobile menu button */}
              <div className="flex md:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-full font-bold bg-gray-200 p-4 text-gray-900 hover:bg-gray-100 hover:text-gray-900 border-2 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars2Icon className="block h-6 w-6" aria-hidden="true" />}
                </Disclosure.Button>
              </div>

              <h1 className="text-gray-700 hover:text-blue-500 text-2xl font-bold ml-4  md:ml-0 cursor-pointer">Main</h1>
            </div>

            <div className="flex items-center space-x-8">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavHoverDropdown items={navigationItems} />
                </div>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">Register</button>
            </div>

          </div>


          {/* Mobile Navbar */}
          <div className={` md:hidden block bg-white fixed w-full top-20 overflow-y-auto bottom-0 py-6 duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
            {navigationItems.map((item, index) => (

              <div key={index}>
                <h1 className="py-4 pl-7 text-gray-800 font-semibold flex justify-between items-center md:pr-0 pr-5 hover:text-blue-600"
                  onClick={() => {
                    setShow(!show)
                    setLabel(item.label)
                  }}>
                  {item.label}
                  <span className={`text-sm font-bold md:hidden inline`}>
                    {
                      label === item.label && show ? <ChevronUpIcon className="w-8 h-8 " /> : <ChevronDownIcon className="w-8 h-8 " />
                    }
                  </span>
                </h1>
                <div
                  className={`${label === item.label && show ? "md:hidden" : "hidden"} flex flex-col`}
                >
                  {item.sublinks.map((sublink, index) => (
                    <Disclosure.Button as={Link} href={sublink.href} key={index} className="py-3 pl-14 hover:text-blue-600">
                      {sublink.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </div>

            ))}

          </div>

        </div>
      )}
    </Disclosure>

  );
}
