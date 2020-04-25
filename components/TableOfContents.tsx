import Link from "next/link";
import { ChevronRight } from "./Icons";

// TODO: Add types for this
export function ModuleTOC({ data }: any) {
  console.log("component data: ", data);

  return (
    <div className="bg-white shadow rounded overflow-hidden max-w-screen-xl mx-auto mb-12">
      <ul>
        {data.lessons.map(({ title, description, path }: any) => {
          return (
            <li className="border-t border-gray-200">
              <Link href={`/course/${path}`}>
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
}

export function CourseTOC({ data }: any) {
  console.log("component data: ", data);
  return (
    <>
      {data.modules.map(
        ({ title, description, path, lessons }: any, i: number) => {
          return (
            <div className="bg-white shadow rounded overflow-hidden max-w-screen-xl mx-auto mb-12">
              <ul>
                {path && (
                  <li>
                    <Link href={`/course/${path}`}>
                      <a className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
                        <div className="px-4 py-4 flex items-center sm:px-6">
                          <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                            <div className="text-xl leading-6 font-medium text-indigo-600 truncate">
                              Module {i + 1}:{" "}
                              <span className="ml-1 font-normal text-gray-500">
                                {title}
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

                {lessons.map(({ title, description, path }: any) => {
                  return (
                    <li className="border-t border-gray-200">
                      <Link href={`/course/${path}`}>
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
        }
      )}
    </>
  );
}
