import Link from "next/link";
import { ChevronRight } from "./Icons";
import { PagerOptions, LinkData } from "../models/index";

export interface BreadcrumbProps {
  links: LinkData[];
}

export function BreadcrumbNav({ links }: BreadcrumbProps) {
  return (
    <div className="flex py-8">
      {links.map((link: LinkData, i: number) => (
        <div className="flex items-center">
          <Link href={link.href}>
            <a className="p-2 rounded-md text-md leading-5 hover:bg-gray-100 transition duration-150 ease-in-out">
              {link.title}
            </a>
          </Link>
          {i < links.length - 1 && <ChevronRight />}
        </div>
      ))}
    </div>
  );
}

export interface LessonPagerProps {
  pagerOptions: PagerOptions;
}
export function LessonPager({ pagerOptions }) {
  const { current, previous, next } = pagerOptions;

  return (
    <div>
      {current !== null && (
        <div className="px-4 flex items-center justify-between sm:px-0 max-w-screen-xl mx-auto mt-12">
          <div className="w-0 flex-1 flex">
            {previous !== null && (
              <Link href={previous.href}>
                <a
                  href="#"
                  className="-mt-px border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400 transition ease-in-out duration-150"
                >
                  <svg
                    className="mr-3 h-5 w-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Previous: {previous.title}
                </a>
              </Link>
            )}
          </div>
          <div className="hidden md:flex">
            <a
              href="#"
              className="-mt-px border-t-2 border-indigo-500 pt-4 px-4 inline-flex items-center text-sm leading-5 font-medium text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700 transition ease-in-out duration-150"
            >
              {current.title}
            </a>
          </div>
          <div className="w-0 flex-1 flex justify-end">
            {next !== null && (
              <Link href={next.href}>
                <a className="-mt-px border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400 transition ease-in-out duration-150">
                  Next: {next.title}
                  <svg
                    className="ml-3 h-5 w-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
