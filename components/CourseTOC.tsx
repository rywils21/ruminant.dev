import React, { ReactNode } from "react";
import Link from "next/link";
import { ModuleTOC, LessonLink } from "../models/index";

interface CourseTOCProps {
  modules: ModuleTOC[];
}

function ChevronRight() {
  return (
    <svg
      className="h-5 w-5 text-gray-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function CourseTOC({ modules }: CourseTOCProps) {
  return (
    <>
      {modules.map(({ module, lessons }: ModuleTOC, i: number) => {
        return (
          <div className="bg-white shadow rounded overflow-hidden max-w-screen-xl mx-auto mb-12">
            <ul>
              {module !== null && (
                <li>
                  <Link href={module.href}>
                    <a className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
                      <div className="px-4 py-4 flex items-center sm:px-6">
                        <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                          <div className="text-xl leading-6 font-medium text-indigo-600 truncate">
                            Module {i + 1}:{" "}
                            <span className="ml-1 font-normal text-gray-500">
                              {module.title}
                            </span>
                          </div>
                        </div>
                        <div className="ml-5 flex-shrink-0">
                          <ChevronRight />
                        </div>
                      </div>
                    </a>
                  </Link>
                </li>
              )}

              {lessons.map(({ title, description, href }: LessonLink) => {
                return (
                  <li className="border-t border-gray-200">
                    <Link href={href}>
                      <a className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
                        <div className="px-4 py-4 flex items-center sm:px-6">
                          <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                            <div>
                              <div className="text-sm leading-5 font-medium text-indigo-600 truncate">
                                {title}
                              </div>
                              <div className="mt-2 flex">
                                <div className="flex items-center text-sm leading-5 text-gray-500">
                                  {description}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="ml-5 flex-shrink-0">
                            <ChevronRight />
                          </div>
                        </div>
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
}
