import "../../../styles/index.css";
import Layout from "../../../components/Layout";
import glob from "glob";
import Head from "next/head";
import React from "react";
import { CourseTOC } from "../../../components/TableOfContents";

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
