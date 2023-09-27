"use client";
import { Disclosure } from "@headlessui/react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavHoverDropdown from "./NavHoverDropdown";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Services", href: "/services", current: false },
  { name: "Blogs", href: "/blogs", current: false },
  { name: "Contact", href: "/contact", current: false },
];

const homeItems = {
  label: "Home", href: "/", sublinks: [
    { name: "Home 1", href: "/", current: false },
    { name: "Home 2", href: "/", current: false },
    { name: "Home 3", href: "/", current: false },
  ]
}

const aboutItems = {
  label: "About", href: "/about", sublinks: [
    { name: "About 1", href: "/", current: false },
    { name: "About 2", href: "/", current: false },
    { name: "About 3", href: "/", current: false },
  ]
}

const servicesItems = {
  label: "Services", href: "/services", sublinks: [
    { name: "Service 1", href: "/", current: false },]
};

const blogsItems = {
  label: "Blogs", href: "/blogs", sublinks: [
    { name: "Blog 1", href: "/", current: false },
    { name: "Blog 2", href: "/", current: false },
    { name: "Blog 3", href: "/", current: false },
  ]
}

const contactItems = {
  label: "Contact", href: "/contact", sublinks: [
    { name: "Contact 1", href: "/", current: false },
    { name: "Contact 2", href: "/", current: false },
    { name: "Contact 3", href: "/", current: false },
  ]
}


export default function Navbar() {
  const pathname = usePathname();
  // Function to check if a given path is the current route
  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <>
      <Disclosure as="nav" className="bg-white w-full">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl  px-6 sm:px-6 lg:px-8 ">
              <div className="flex h-20 items-center justify-between ">
                <div className="flex items-center flex-shrink-0 ">
                  <div className="flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-full font-bold bg-gray-200 p-4 text-gray-900 hover:bg-gray-100 hover:text-gray-900 border-2 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars2Icon className="block h-6 w-6" aria-hidden="true" />}
                    </Disclosure.Button>
                  </div>
                  <h1 className="text-gray-700 hover:text-blue-500 pl-4 text-2xl font-bold">Main</h1>
                </div>

                <div className="flex items-center space-x-8">
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      <NavHoverDropdown items={homeItems} />
                      <NavHoverDropdown items={aboutItems} />
                      <NavHoverDropdown items={servicesItems} />
                      <NavHoverDropdown items={blogsItems} />
                      <NavHoverDropdown items={contactItems} />
                    </div>
                  </div>

                  <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">Register</button>
                </div>

              </div>
            </div>

            <Disclosure.Panel className="md:hidden ">
              <div className="space-y-2 p-4 bg-white flex flex-col justify-start items-start min-h-screen">
                {/* {navigation.map((item) => (
                  <Disclosure.Button key={item.name} as="a" href={item.href} className={classNames(item.current ? "bg-gray-900 text-white" : "text-black hover:bg-gray-900 hover:text-white", "block rounded-md px-3 py-2 text-base font-medium")} aria-current={item.current ? "page" : undefined}>
                    {item.name}
                  </Disclosure.Button>
                ))} */}

                <Disclosure.Button as={Link} href="/" className={`${isActive("/") ? "text-blue-600 hover:text-blue-500   p-3 text-lg font-semibold" : "text-black font-semibold hover:bg-gray-0 hover:text-blue-600 rounded-md px-3 py-2 text-lg"}`} aria-current={isActive("/") ? "page" : undefined}>
                  Home
                </Disclosure.Button>
                <Disclosure.Button as={Link} href="/about" className={`${isActive("/about") ? "text-blue-600 hover:text-blue-500 p-3 text-lg font-semibold" : "text-black font-semibold hover:bg-gray-0 hover:text-blue-600 rounded-md px-3 py-2 text-lg"}`} aria-current={isActive("/about") ? "page" : undefined}>
                  About
                </Disclosure.Button>
                <Disclosure.Button as={Link} href="/contact" className={`${isActive("/services") ? "text-blue-600 hover:text-blue-500 p-3 text-lg font-semibold" : "text-black font-semibold hover:bg-gray-0 hover:text-blue-600 rounded-md px-3 py-2 text-lg"}`} aria-current={isActive("/services") ? "page" : undefined}>
                  Services
                </Disclosure.Button>
                {/*Projects Dropdown start*/}
                {/* <NavHoverDropdown items={blogsItems} /> */}
                {/*Projects Dropdown end*/}
                <Disclosure.Button as={Link} href="/contact" className={`${isActive("/contact") ? "text-blue-600 hover:text-blue-500 p-3 text-lg font-semibold" : "text-black font-semibold hover:bg-gray-0 hover:text-blue-600 rounded-md px-3 py-2 text-lg"}`} aria-current={isActive("/contact") ? "page" : undefined}>
                  Contact
                </Disclosure.Button>

              </div>

            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
