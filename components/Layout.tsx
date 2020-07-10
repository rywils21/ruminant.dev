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
}

const mainNav: RouteItem[] = [
  {
    displayName: "Home",
    route: "/",
  },
  {
    displayName: "Courses",
    route: "/courses",
  },
  {
    displayName: "Projects",
    route: "/projects",
  },
  {
    displayName: "Blog",
    route: "/blog",
  },
  {
    displayName: "Contact",
    route: "/contact",
  },
];

const footerNav: RouteItem[] = [
  {
    displayName: "Home",
    route: "/",
  },
  {
    displayName: "About",
    route: "/about",
  },
  {
    displayName: "Contact",
    route: "/contact",
  },
];

function Nav() {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", (key) => {
      if (key.code === "Escape") {
        setMenuOpen(false);
      }
    });
  }, []);

  return (
    <nav className="bg-white shadow z-10 w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-auto"
                src="/logo.svg"
                alt="Ruminant.dev logo"
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex">
              {mainNav.map((route: RouteItem, i: number) => {
                return (
                  <Link href={route.route} key={route.route}>
                    <a
                      className={`${
                        i > 0 ? "ml-8" : ""
                      } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none ${
                        router.pathname === route.route
                          ? "border-indigo-500 text-gray-900 focus:border-indigo-700"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"
                      } transition duration-150 ease-in-out`}
                    >
                      {route.displayName}
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex">
            <div className="hidden sm:ml-6 sm:flex">
              {/* <a className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                Contact
              </a> */}
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            {/* <!-- Mobile menu button --> */}
            <button
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              {/* <!-- Icon when menu is closed. -->*/}
              <svg
                className={`${menuOpen ? "hidden" : "block"} h-6 w-6`}
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
              {/* <!-- Icon when menu is open. -->*/}
              <svg
                className={`${menuOpen ? "block" : "hidden"} h-6 w-6`}
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
        </div>
      </div>

      <div className={`${menuOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="pt-2 pb-3">
          {mainNav.map((route: RouteItem, i: number) => {
            return (
              <Link href={route.route} key={route.route}>
                <a
                  className={`${
                    i > 0 ? "mt-1" : ""
                  } block pl-3 pr-4 py-2 border-l-4 text-base font-medium focus:outline-none ${
                    router.pathname === route.route
                      ? "border-indigo-500  text-indigo-700 bg-indigo-50  focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700"
                      : "border-transparent  text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
                  } transition duration-150 ease-in-out`}
                >
                  {route.displayName}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <div className="bg-gray-900">
        <div className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
            {footerNav.map((route: RouteItem, i: number) => {
              return (
                <div className="px-5 py-2" key={route.route}>
                  <Link href={route.route}>
                    <a
                      className={`text-base leading-6 text-gray-500 hover:text-gray-100`}
                    >
                      {route.displayName}
                    </a>
                  </Link>
                </div>
              );
            })}
          </nav>
          <div className="mt-8 flex justify-center">
            <a
              href="https://twitter.com/rywils21"
              target="_blank"
              className="ml-6 text-gray-400 hover:text-gray-100"
            >
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href="https://github.com/rywils21"
              target="_blank"
              className="ml-6 text-gray-400 hover:text-gray-100"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
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
  );
}

export default ({ children }) => {
  return (
    <div className="relative">
      <Nav />

      <main
        className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
        style={{ minHeight: "calc(100vh - 64px)" }}
        tabIndex={0}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
};
