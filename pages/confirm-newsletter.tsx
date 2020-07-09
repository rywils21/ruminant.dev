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

export default ({ data }) => {
  const [state, handleSubmit] = useForm("newsletter");

  return (
    <Layout>
      <Head>
        <title>Ruminant.dev</title>
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="">
          <h1 className="text-4xl font-bold text-gray-900">Email Confirmed!</h1>
          <p className="text-gray-700">Checkout the latest articles</p>
        </div>

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
                  {markdownBody.split("\n")[1]}
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
    </Layout>
  );
};

// src/pages/index.js
export async function getStaticProps() {
  const slugs = glob
    .sync("content/articles/**/*.md")
    .map((file) => file.split("/")[2].replace(/ /g, "-").slice(0, -3).trim());

  const data = [];
  for (let i = 0; i < slugs.length; i++) {
    const slug = slugs[i];
    const content = await import(`../content/articles/${slug}.md`);
    const document = matter(content.default);

    data.push({
      frontmatter: document.data,
      markdownBody: document.content,
      slug: `/articles/${slug}`,
    });
  }

  return {
    props: {
      data,
    },
  };
}
