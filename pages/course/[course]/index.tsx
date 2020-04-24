import "../../../styles/index.css";
import Layout from "../../../components/Layout";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import glob from "glob";
import Head from "next/head";
import React, { ReactNode } from "react";
import Link from "next/link";
import { ModuleTOC, LessonLink } from "../../../models/index";

interface CourseTOCProps {
  data: any;
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

export function CourseTOC({ data }: CourseTOCProps) {
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

export default ({ data }) => {
  return (
    <Layout>
      <Head>
        <title>Course</title>
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Course Page</h1>
      </div>

      <div>content coming</div>

      <div className="bg-gray-100 mt-16 py-8 px-4 sm:px-6 lg:px-8">
        <CourseTOC data={data} />
      </div>
    </Layout>
  );
};

export async function getStaticProps({ ...ctx }) {
  const { course } = ctx.params;

  const data = await import(`../../../content/courses/${course}/data.json`);

  console.log("course static props: ", ctx, data.default);

  return {
    props: {
      data: data.default,
    },
  };
}

export async function getStaticPaths() {
  //get all .md files in the posts dir
  const courses = glob.sync("content/courses/*");

  const coursePaths = courses.map((course) =>
    course.replace("content/courses/", "")
  );
  console.log("course paths", coursePaths);

  // create paths with `slug` param
  const paths = coursePaths.map((slug) => `/course/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
