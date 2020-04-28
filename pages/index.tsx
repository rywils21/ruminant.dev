import "../styles/index.css";
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Layout from "../components/Layout";

import Head from "next/head";
import Link from "next/link";

export default () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>

      <div className="relative overflow-hidden">
        <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
          <div className="text-center">
            <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              Program with <span className="text-indigo-600">Purpose</span>
            </h2>
            <p className="mt-3 max-w-md sm:max-w-xl mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-2xl">
              Build real software by following courses, tutorials, and articles
              written by someone building real software.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link href="/course/software-engineer-crash-course">
                  <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                    Start Here
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
