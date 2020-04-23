import "../styles/index.css";
import Layout from "../components/Layout";
import Link from "next/link";

import Head from "next/head";

export default () => {
  return (
    <Layout>
      <Head>
        <title>Courses</title>
      </Head>

      <div className="relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto ">
          <div>(TODO: load list of courses here)</div>
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="border border-gray-200 bg-white rounded p-6 flex flex-col justify-between leading-normal shadow">
                <div className="sm:text-center lg:text-left">
                  <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                    Learn fullstack web development
                  </h2>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Web Development Foundations is a free online course designed
                    to help you build modern web applications.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="inline-flex rounded-md shadow">
                      <Link href="/courses/web-development-foundations/1/build-a-web-page">
                        <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                          Get started
                        </a>
                      </Link>
                    </div>
                    <div className="ml-3 inline-flex">
                      <Link href="/courses/web-development-foundations">
                        <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out">
                          Learn more
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
