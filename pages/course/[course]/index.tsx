import "../../../styles/index.css";
import Layout from "../../../components/Layout";
import glob from "glob";
import Head from "next/head";
import matter from "gray-matter";
import React from "react";
import { CourseTOC, CourseCTA } from "../../../components/TableOfContents";
import { MarkdownRenderer } from "../../../components/MarkdownRenderer";

export default ({ data, content }) => {
  return (
    <Layout>
      <Head>
        <title>Course</title>
      </Head>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <MarkdownRenderer content={content} />
      </div>

      <CourseCTA data={data} />

      <div className="bg-gray-100 mt-16 py-8 px-4 sm:px-6 lg:px-8">
        <h2 className="leading-tight text-3xl font-bold text-gray-900 overflow-hidden max-w-5xl mx-auto my-4 px-4">
          Course Contents
        </h2>
        <CourseTOC data={data} />
      </div>
    </Layout>
  );
};

export async function getStaticProps({ ...ctx }) {
  const { course } = ctx.params;

  const data = await import(`../../../content/courses/${course}/data.json`);

  const courseContent = await import(
    `../../../content/courses/${course}/index.md`
  );

  const courseMarkdown = matter(courseContent.default);

  console.log("course static props: ", ctx, data.default);

  return {
    props: {
      data: data.default,
      content: courseMarkdown.content,
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
