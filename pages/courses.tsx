import "../styles/index.css";
import Layout from "../components/Layout";
import Link from "next/link";
import glob from "glob";

import Head from "next/head";

export default () => {
  return (
    <Layout>
      <Head>
        <title>Courses</title>
      </Head>

      <div className="relative bg-gray-800 mt-36 max-w-5xl rounded-lg mx-auto overflow-hidden">
        <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80"
            alt="Support team"
          />
        </div>
        <div className="relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <div className="text-base leading-6 font-semibold uppercase tracking-wider text-gray-300"></div>
            <h2 className="mt-2 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
              Software Engineer Crash Course
            </h2>
            <p className="mt-3 text-lg leading-7 text-gray-300">
              Build and deploy a real website without any prior knowledge. This
              course covers a broad range of topics to provide an overview of
              what it means to be a software engineer.
            </p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <Link href="/course/software-engineer-crash-course">
                  <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 bg-white hover:text-gray-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                    Start Building
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
