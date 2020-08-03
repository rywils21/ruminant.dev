import "../styles/index.css";
import { useState, useEffect, Fragment } from "react";
import { useSpring, animated } from "react-spring";
import Layout from "../components/Layout";
import { useForm, ValidationError } from "@statickit/react";

import Head from "next/head";
import Link from "next/link";
import { ArticleCard } from "../components/ArticleCard";
import glob from "glob";
import matter from "gray-matter";
import moment from "moment";
import { GenericNewsletterForm } from "../components/NewsletterForms";

export default ({ data }) => {
  const [state, handleSubmit] = useForm("newsletter");

  return (
    <Layout>
      <Head>
        <title>Ruminant.dev</title>
      </Head>

      <div className="relative overflow-hidden mt-20 md:mt-24 lg:mt-30 xl:mt-36">
        <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
          <div className="">
            <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl text-center">
              Program with <span className="text-indigo-600">Purpose</span>
            </h2>
            <div className="relative max-w-3xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
              <div className="relative lg:flex lg:items-start">
                <div className="hidden lg:block lg:flex-shrink-0">
                  <img
                    className="h-48 w-48 rounded-full xl:h-64 xl:w-64"
                    src="/img/ryan-wilson.jpg"
                    alt="Profile picture of Ryan Wilson"
                  />
                </div>

                <div className="relative lg:ml-10">
                  <div className="text-2xl leading-9 text-gray-900">
                    <p className="mt-3 max-w-md sm:max-w-xl mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-2xl">
                      I build software products and will occasionally post
                      tutorials and blog posts.{" "}
                      <Link href="/contact">
                        <a className="underline text-indigo-600 hover:text-indigo-700">
                          Contact Me
                        </a>
                      </Link>{" "}
                      with questions or requests!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <ul className="max-w-3xl">
          {data.map(({ frontmatter, markdownBody, slug }) => (
            <li className="border-t-2 mt-12" key={slug}>
              <div className="py-4">
                <div className="text-gray-700">
                  {moment(frontmatter.published).format("MMMM D, Y")}
                </div>
                <h2 className="text-3xl tracking-tight leading-tight font-bold text-gray-900">
                  {frontmatter.title}
                </h2>

                <div className="text-gray-700 pt-4">
                  {frontmatter.description}
                </div>
                <div className="pt-8">
                  <Link href={slug}>
                    <a className="text-blue-500 hover:text-blue-700 font-semibold">
                      Read More
                    </a>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

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

      {/* <div className="relative bg-gray-50 pt-16 px-4 sm:px-6 lg:pt-48 lg:pb-28 lg:px-8">
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
      </div> */}

      <div className="my-12 flex justify-center">
        <GenericNewsletterForm />
      </div>
    </Layout>
  );
};

// src/pages/index.js
export async function getStaticProps() {
  const slugs = glob
    .sync("content/blog/**/*.md")
    .map((file) => file.split("/")[2].replace(/ /g, "-").slice(0, -3).trim());

  const data = [];
  for (let i = 0; i < slugs.length; i++) {
    const slug = slugs[i];
    const content = await import(`../content/blog/${slug}.md`);
    const document = matter(content.default);

    data.push({
      frontmatter: document.data,
      markdownBody: document.content,
      slug: `/blog/${slug}`,
    });
  }

  return {
    props: {
      data,
    },
  };
}
