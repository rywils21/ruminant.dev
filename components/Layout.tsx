import "../styles/index.css";
import {
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

import Link from "next/link";
import { useRouter } from "next/router";

const headshotImg = "/ryan-wilson.jpg";

interface RouteItem {
  displayName: string;
  route: string;
  icon: ReactNode;
}

const routeConfig: RouteItem[] = [
  {
    displayName: "Home",
    route: "/",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
      />
    ),
  },
  {
    displayName: "Articles",
    route: "/articles",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
      />
    ),
  },
  // {
  //   displayName: "Tutorials",
  //   route: "/tutorials",
  //   icon: (
  //     <path
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       strokeWidth="2"
  //       d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
  //     />
  //   )
  // },
  {
    displayName: "Ideas",
    route: "/ideas",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    ),
  },
  {
    displayName: "Projects",
    route: "/projects",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
      />
    ),
  },
  // {
  //   displayName: "Metrics",
  //   route: "/metrics",
  //   icon: (
  //     <path
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       strokeWidth="2"
  //       d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
  //     />
  //   )
  // }
];

function DesktopNav() {
  const router = useRouter();

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 bg-gray-800">
        <div className="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            {/* <img
                className="h-8 w-auto"
                src="/img/logos/workflow-logo-on-dark.svg"
              /> */}
            <div className="text-lg text-gray-300 font-bold">Ruminant.dev</div>
          </div>
          <nav className="mt-5 flex-1 px-2 bg-gray-800">
            {routeConfig.map((route: RouteItem) => (
              <Link href={route.route} key={route.route}>
                <a
                  className={`group flex items-center px-2 py-2 text-sm leading-5 font-medium rounded-md focus:outline-none focus:bg-gray-700 transition ease-in-out duration-150 ${
                    router.pathname === route.route
                      ? "text-white bg-gray-900"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white"
                  }`}
                >
                  <svg
                    className="mr-3 h-6 w-6 text-gray-300 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    {route.icon}
                  </svg>
                  {route.displayName}
                </a>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex-shrink-0 flex bg-gray-700 p-4">
          <a href="#" className="flex-shrink-0 group block focus:outline-none">
            <div className="flex items-center">
              <div>
                <img
                  className="inline-block h-9 w-9 rounded-full"
                  src={headshotImg}
                  alt="Ryan Wilson's Profile Picture"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm leading-5 font-medium text-white">
                  By Ryan Wilson
                </p>
                <Link href="/contact">
                  <p className="text-xs leading-4 font-medium text-gray-400 group-hover:text-gray-300 group-focus:underline transition ease-in-out duration-150">
                    Contact
                  </p>
                </Link>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

interface MobileNavPropTypes {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

function MobileNav({ sidebarOpen, setSidebarOpen }: MobileNavPropTypes) {
  const router = useRouter();
  return (
    <div className="md:hidden">
      <div
        onClick={() => {
          setSidebarOpen(false);
        }}
        className={`fixed inset-0 z-30 bg-gray-600 opacity-0 pointer-events-none transition-opacity ease-linear duration-300 ${
          sidebarOpen
            ? "opacity-75 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      ></div>
      <div
        className={`fixed inset-y-0 left-0 flex flex-col z-40 max-w-xs w-full bg-gray-800 transform ease-in-out duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }  `}
      >
        <div className="absolute top-0 right-0 -mr-14 p-1">
          <button
            style={{ display: sidebarOpen ? "" : "none" }}
            onClick={() => {
              setSidebarOpen(false);
            }}
            className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
          >
            <svg
              className="h-6 w-6 text-white"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
          <div className="flex-shrink-0 flex items-center px-4">
            {/* <img
                className="h-8 w-auto"
                src="/img/logos/workflow-logo-on-dark.svg"
              /> */}
            <div className="text-lg text-gray-300 font-bold">Ruminant.dev</div>
          </div>
          <nav className="mt-5 px-2">
            {routeConfig.map((route: RouteItem) => (
              <Link href={route.route} key={route.route}>
                <a
                  className={`group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md focus:outline-none focus:bg-gray-700 transition ease-in-out duration-150 ${
                    router.pathname === route.route
                      ? "text-white bg-gray-900"
                      : "mt-1 text-gray-300 hover:text-white hover:bg-gray-700 focus:text-white"
                  }`}
                >
                  <svg
                    className="mr-3 h-6 w-6 text-gray-300 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    {route.icon}
                  </svg>
                  {route.displayName}
                </a>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex-shrink-0 flex bg-gray-700 p-4">
          <a href="#" className="flex-shrink-0 group block">
            <div className="flex items-center">
              <div>
                <img
                  className="inline-block h-10 w-10 rounded-full"
                  src={headshotImg}
                  alt="Ryan Wilson's Profile Picture"
                />
              </div>
              <div className="ml-3">
                <p className="text-base leading-6 font-medium text-white">
                  By Ryan Wilson
                </p>
                <Link href="/contact">
                  <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                    Contact
                  </p>
                </Link>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", (key) => {
      if (key.code === "Escape") {
        setSidebarOpen(false);
      }
    });
  }, []);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <MobileNav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <DesktopNav />

      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            onClick={() => {
              setSidebarOpen(true);
            }}
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="overflow-scroll">
          <main
            className="flex-1 relative z-0 overflow-y-auto pt-2 pb-6 focus:outline-none md:py-0  min-h-screen"
            tabIndex={0}
          >
            {children}
          </main>
          <footer>
            <div className="bg-gray-900">
              <div className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
                  <div className="px-5 py-2">
                    <a
                      href="#"
                      className="text-base leading-6 text-gray-500 hover:text-gray-900"
                    >
                      About
                    </a>
                  </div>
                  <div className="px-5 py-2">
                    <a
                      href="#"
                      className="text-base leading-6 text-gray-500 hover:text-gray-900"
                    >
                      Articles
                    </a>
                  </div>

                  <div className="px-5 py-2">
                    <a
                      href="/contact"
                      className="text-base leading-6 text-gray-500 hover:text-gray-900"
                    >
                      Contact
                    </a>
                  </div>
                </nav>
                <div className="mt-8 flex justify-center">
                  <a
                    href="#"
                    className="ml-6 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="ml-6 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
                <div className="mt-8">
                  <p className="text-center text-base leading-6 text-gray-400">
                    &copy; 2020 Ryan Wilson. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
