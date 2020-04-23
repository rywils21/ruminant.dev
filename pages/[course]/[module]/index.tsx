import "../../../styles/index.css";
import Layout from "../../../components/Layout";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import glob from "glob";
import Head from "next/head";

export default (props) => {
  return (
    <Layout>
      <Head>
        <title>Module</title>
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Moudle Page</h1>
      </div>

      <div>content coming</div>
    </Layout>
  );
};

export async function getStaticProps({ ...ctx }) {
  const { module } = ctx.params;

  console.log("module static props: ", ctx);

  return {
    props: {},
  };
}

export async function getStaticPaths() {
  //get all .md files in the posts dir
  const modules = glob.sync("content/courses/*/*");

  const modulePaths = modules.map((course) =>
    course.replace("content/courses/", "")
  );
  console.log("module paths", modulePaths);

  // create paths with `slug` param
  const paths = modulePaths.map((slug) => `/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
