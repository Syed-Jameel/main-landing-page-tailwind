import { Instrument_Sans } from "next/font/google";
import Link from "next/link";

export default function NavHoverDropdown({label , items}) {
  return (
    <div className="group inline-block relative">
      <button className="bg-gray-0 text-gray-900 text-base font-semibold py-2 px-3 sm-px-4 inline-flex items-center hover:text-blue-600 ">
        <span className="mr-1">{label}</span>
        <svg className="fill-current h-4 w-4 transition-transform duration-300 transform text-gray-400 group-hover:font-bold  group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </button>
      <ul className="absolute hidden shadow-lg font-semibold text-sm  text-gray-900 rounded-lg pt-3  group-hover:block  min-w-[120px]">
        {
          items?.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="rounded bg-white hover:bg-gray-100  hover:text-blue-500  py-2 px-4 block whitespace-no-wrap">
                {item.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
