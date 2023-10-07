"use client";
import { useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

import NavHoverDropdown from "./NavHoverDropdown";
import { navigationItems } from "./navigationItems";

import MobileNavbar from "./MobileNavbar";

export default function Navbar() {

  const pathname = usePathname(null);

  useEffect(() => {
    const parentItem = navigationItems.find((item) =>
      item.sublinks.some((sublink) => sublink.href === pathname)
    );

    if (parentItem) {
      navigationItems.map((item) => item.current = false)
      parentItem.current = true;
    }

  }, [pathname])

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <div>
          <div className="h-20 flex items-center justify-between  px-2 sm:px-0">
            <div className="flex items-center flex-shrink-0 ">

              {/* Mobile menu button */}
              <div className="flex md:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-full font-bold bg-gray-200 p-4 text-gray-900 hover:bg-gray-100 hover:text-gray-900 border-2 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? <XMarkIcon className="block h-7 w-7" aria-hidden="true" /> : <Bars2Icon className="block h-7 w-7" aria-hidden="true" />}
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
          <MobileNavbar navigationItems={navigationItems} open={open} />

        </div>
      )}
    </Disclosure>

  );
}
