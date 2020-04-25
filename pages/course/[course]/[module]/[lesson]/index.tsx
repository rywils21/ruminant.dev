import "../../../../../styles/index.css";
import Layout from "../../../../../components/Layout";
import matter from "gray-matter";
import glob from "glob";
import Head from "next/head";
import { MarkdownRenderer } from "../../../../../components/MarkdownRenderer";
import {
  BreadcrumbLink,
  BreadcrumbNav,
} from "../../../../../components/Navigation";

export default ({
  lessonData,
  lessonContent,
  lessonFrontmatter,
  moduleData,
  courseData,
}) => {
  // TODO: Add next and prev links

  const links: BreadcrumbLink[] = [
    {
      title: courseData.title,
      href: `/course/${courseData.path}`,
    },
    {
      title: moduleData.title,
      href: `/course/${moduleData.path}`,
    },
    {
      title: lessonData.title,
      href: `/course/${lessonData.path}`,
    },
  ];

  return (
    <Layout>
      <Head>
        <title>{lessonData.title}</title>
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav links={links} />
        <MarkdownRenderer content={lessonContent} />
      </div>
    </Layout>
  );
};

export async function getStaticProps({ ...ctx }) {
  const { course, module, lesson } = ctx.params;
  const data = await import(
    `../../../../../content/courses/${course}/data.json`
  );
  const content = await import(
    `../../../../../content/courses/${course}/${module}/${lesson}.md`
  );
  const lessonMarkdown = matter(content.default);
  console.log("lesson static props: ", ctx);

  const courseData = data.default;

  console.log("module static props: ", ctx, data.default);

  const moduleData = courseData.modules.filter(
    (m) => m.path === `${course}/${module}`
  )[0];

  const lessonData = moduleData.lessons.filter(
    (l) => l.path === `${course}/${module}/${lesson}`
  )[0];

  return {
    props: {
      lessonData,
      moduleData,
      courseData,
      lessonContent: lessonMarkdown.content,
      lessonFrontmatter: lessonMarkdown.data,
    },
  };
}

export async function getStaticPaths() {
  //get all .md files in the posts dir
  const lessons = glob.sync("content/courses/**/*.md");

  const lessonPaths = lessons.map((course) =>
    course.replace("content/courses/", "").replace(".md", "")
  );
  console.log("lesson paths", lessonPaths);

  // create paths with `slug` param
  const paths = lessonPaths.map((slug) => `/course/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
