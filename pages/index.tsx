import "../styles/index.css";
import { useState, useEffect, Fragment } from "react";
import { useSpring, animated } from "react-spring";
import Layout from "../components/Layout";
import { useForm, ValidationError } from "@statickit/react";

import Head from "next/head";
import Link from "next/link";
import { ArticleCard } from "../components/ArticleCard";

export default () => {
  const [state, handleSubmit] = useForm("newsletter");

  return (
    <Layout>
      <Head>
        <title>Ruminant.dev</title>
      </Head>

      <div className="relative overflow-hidden mt-20 md:mt-24 lg:mt-30 xl:mt-36">
        <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
          <div className="text-center">
            <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              Program with <span className="text-indigo-600">Purpose</span>
            </h2>
            <p className="mt-3 max-w-md sm:max-w-xl mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-2xl">
              Don't just learn to code. Learn to build real websites and apps.
              No prior knowledge required.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link href="/projects">
                  <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                    Start a new project
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white overflow-hidden mt-16 md:mt-30 lg:mt-40 xl:mt-48">
        <div className="relative max-w-screen-xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
          <div className="relative lg:flex lg:items-center">
            <div className="hidden lg:block lg:flex-shrink-0">
              <img
                className="h-48 w-48 rounded-full xl:h-64 xl:w-64"
                src="/ryan-wilson.jpg"
                alt="Profile picture of Ryan Wilson"
              />
            </div>

            <div className="relative lg:ml-10">
              <blockquote>
                <div className="text-2xl leading-9 text-gray-900">
                  <p>
                    Hello! My goal for this site is to be a welcoming world of
                    building software. Please feel free to{" "}
                    <Link href="/contact">
                      <a className="text-indigo-600 font-medium hover:underline">
                        contact me
                      </a>
                    </Link>{" "}
                    whether you're learning to code, building something, or
                    looking for feedback.
                  </p>
                </div>
                <footer className="mt-8">
                  <div className="flex">
                    <div className="flex-shrink-0 lg:hidden">
                      <img
                        className="h-12 w-12 rounded-full"
                        src="/ryan-wilson.jpg"
                        alt="Profile picture of Ryan Wilson"
                      />
                    </div>
                    <div className="ml-4 lg:ml-0">
                      <div className="text-base leading-6 font-medium text-gray-900">
                        Ryan Wilson
                      </div>
                      <div className="text-base leading-6 font-medium text-indigo-600">
                        Creator of ruminant.dev
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <div className="relative bg-gray-800 mt-36">
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

      <div className="relative bg-gray-50 pt-16 px-4 sm:px-6 lg:pt-48 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
              Latest Articles
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
              Shorter tutorials, personal strategies, and opinions that aren't
              part of courses.
            </p>
          </div>
          <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            <ArticleCard
              type="Blog"
              title="Boost your conversion rate"
              description="Oh god, the height of this card is dependent on the lenght of the content. How silly is that? The more I type, the more it looks appropriately sized. Yikes. We'll have to be careful with that."
              imgSrc="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
              publishDate="Mar 16, 2020"
              readingTime="6 min"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-24">
        <div className="max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="px-6 py-6 bg-gray-900 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
            {state.succeeded ? (
              <div className="flex flex-col w-full items-center">
                <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9">
                  Thank you! You will receive emails soon.
                </h2>
              </div>
            ) : (
              <Fragment>
                <div className="xl:w-0 xl:flex-1">
                  <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9">
                    Learn to build real software
                  </h2>
                  <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
                    Sign up to receive emails when new content is published.
                  </p>
                </div>
                <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
                  <form className="sm:flex" onSubmit={handleSubmit}>
                    <input
                      aria-label="Email address"
                      type="email"
                      name="email"
                      required
                      className="appearance-none w-full px-5 py-3 border border-transparent text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out"
                      placeholder="Enter your email"
                    />
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                      <button className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400 transition duration-150 ease-in-out">
                        Submit
                      </button>
                    </div>
                  </form>
                  <p className="mt-3 text-sm leading-5 text-indigo-200">
                    Your privacy matters. Your email will never be shared with
                    anyone.
                  </p>
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};
