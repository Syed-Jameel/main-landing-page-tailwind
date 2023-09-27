import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavHoverDropdown({ items }) {
  const pathname = usePathname();
  // Function to check if a given path is the current route
  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <div className="group inline-block relative">
      <button className=" px-1 py-2 inline-flex items-center hover:text-blue-600 ">
        <Link href={items.href} className={`${isActive(items.href) ? "text-blue-600 hover:text-blue-500 px-1 py-2  text-base font-bold" : "text-gray-900 font-semibold hover:bg-gray-0 hover:text-blue-600 rounded-md px-1 py-2 text-base"}`}>
          {items.label}
        </Link>
        <svg className="fill-current h-4 w-4 transition-transform duration-300 transform text-gray-400 group-hover:font-bold  group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </button>
      <ul className="absolute hidden shadow-lg font-semibold text-sm bg-white text-gray-900 rounded-lg pt-3 pb-2  group-hover:block  min-w-[120px]">
        {
          items.sublinks?.map((sublink) => (
            <li key={sublink.name}>
              <Disclosure.Button href={sublink.href} as={Link} className=" bg-white hover:bg-[#F9F8FA]  hover:text-blue-500  py-2 px-4 block whitespace-no-wrap">
                {sublink.name}
              </Disclosure.Button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
