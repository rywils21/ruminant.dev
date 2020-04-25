import "../../../../styles/index.css";
import Layout from "../../../../components/Layout";
import glob from "glob";
import Head from "next/head";
import { ModuleTOC } from "../../../../components/TableOfContents";
import { BreadcrumbNav } from "../../../../components/Navigation";
import { LinkData } from "../../../../models/index";

export default ({ moduleData, courseData }) => {
  // TODO: fashion breadcrumb from data
  // TODO: Add a start now button that goes to first lesson
  // TODO: Pluck description content from index.md???

  const links: LinkData[] = [
    {
      title: courseData.title,
      href: `/course/${courseData.path}`,
    },
    {
      title: moduleData.title,
      href: `/course/${moduleData.path}`,
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Module</title>
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav links={links} />

        <h1 className="text-2xl font-semibold text-gray-900">
          {moduleData.title}
        </h1>
      </div>

      <div>content coming</div>

      <div className="bg-gray-100 mt-16 py-8 px-4 sm:px-6 lg:px-8">
        <ModuleTOC data={moduleData} />
      </div>
    </Layout>
  );
};

export async function getStaticProps({ ...ctx }) {
  const { course, module } = ctx.params;

  const data = await import(`../../../../content/courses/${course}/data.json`);

  const courseData = data.default;

  console.log("module static props: ", ctx, data.default);

  const moduleData = courseData.modules.filter(
    (m) => m.path === `${course}/${module}`
  )[0];

  return {
    props: {
      moduleData,
      courseData,
    },
  };
}

export async function getStaticPaths() {
  //get all .md files in the posts dir
  const modules = glob.sync("content/courses/*/*");

  const modulePaths = modules
    .filter((course) => course.indexOf("data.json") === -1)
    .map((course) => course.replace("content/courses/", ""));
  console.log("module paths", modulePaths);

  // create paths with `slug` param
  const paths = modulePaths.map((slug) => `/course/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
