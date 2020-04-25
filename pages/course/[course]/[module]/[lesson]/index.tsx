import "../../../../../styles/index.css";
import Layout from "../../../../../components/Layout";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import glob from "glob";
import Head from "next/head";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";

const markdownRenderers = {
  // TODO: Add appropriate tailwind styles to each level under h1
  heading: ({ level, children }) => {
    if (level === 1) {
      return (
        <h1 className="text-2xl font-semibold text-gray-900">{children}</h1>
      );
    } else if (level === 2) {
      return (
        <h2 className="text-2xl font-semibold text-gray-900">{children}</h2>
      );
    } else if (level === 3) {
      return (
        <h3 className="text-2xl font-semibold text-gray-900">{children}</h3>
      );
    } else if (level === 4) {
      return (
        <h4 className="text-2xl font-semibold text-gray-900">{children}</h4>
      );
    } else if (level === 5) {
      return (
        <h5 className="text-2xl font-semibold text-gray-900">{children}</h5>
      );
    } else {
      return (
        <h6 className="text-2xl font-semibold text-gray-900">{children}</h6>
      );
    }
  },
  code: ({ language, value }) => {
    return (
      <div className="rounded bg-gray-800">
        <SyntaxHighlighter language={language} style={okaidia}>
          {value}
        </SyntaxHighlighter>
      </div>
    );
  },
};

export default ({
  lessonData,
  lessonContent,
  lessonFrontmatter,
  moduleData,
  courseData,
}) => {
  // TODO: craft breadcrumb item
  // TODO: Add next and prev links

  console.log("lesson content: ", lessonContent);
  return (
    <Layout>
      <Head>
        <title>{lessonData.title}</title>
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ReactMarkdown source={lessonContent} renderers={markdownRenderers} />
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
