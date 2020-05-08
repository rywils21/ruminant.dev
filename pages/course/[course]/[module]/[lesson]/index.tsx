import "../../../../../styles/index.css";
import Layout from "../../../../../components/Layout";
import matter from "gray-matter";
import glob from "glob";
import Head from "next/head";
import { MarkdownRenderer } from "../../../../../components/MarkdownRenderer";
import {
  BreadcrumbNav,
  LessonPager,
} from "../../../../../components/Navigation";
import { LinkData, PagerOptions } from "../../../../../models/index";

export default ({
  lessonData,
  lessonContent,
  lessonFrontmatter,
  moduleData,
  courseData,
  previousLink,
  nextLink,
}) => {
  // TODO: Add next and prev links

  const links: LinkData[] = [
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

  const pagerOptions: PagerOptions = {
    previous: previousLink,
    current: {
      title: lessonData.title,
      href: `/course/${lessonData.path}`,
    },
    next: nextLink,
  };

  return (
    <Layout>
      <Head>
        <title>{lessonData.title}</title>
      </Head>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav links={links} />
        <MarkdownRenderer content={lessonContent} />
        <LessonPager pagerOptions={pagerOptions} />
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

  let nextModuleLink: LinkData | null = null;
  for (let i = 0; i < courseData.modules.length - 1; i++) {
    const currentModule = courseData.modules[i];
    const nextModule = courseData.modules[i + 1];

    if (currentModule.path === moduleData.path) {
      nextModuleLink = {
        title: nextModule.title,
        href: `/course/${nextModule.path}`,
      };
    }
  }

  const lessonData = moduleData.lessons.filter(
    (l) => l.path === `${course}/${module}/${lesson}`
  )[0];

  let previousLink = null;
  let nextLink = null;

  for (let i = 1; i < moduleData.lessons.length; i++) {
    const previousLesson = moduleData.lessons[i - 1];
    const currentLesson = moduleData.lessons[i];

    if (currentLesson.path === lessonData.path) {
      previousLink = {
        title: previousLesson.title,
        href: `/course/${previousLesson.path}`,
      };
    }
  }

  if (previousLink === null) {
    previousLink = {
      title: moduleData.title,
      href: `/course/${moduleData.path}`,
    };
  }

  for (let i = 0; i < moduleData.lessons.length - 1; i++) {
    const currentLesson = moduleData.lessons[i];
    const nextLesson = moduleData.lessons[i + 1];

    if (currentLesson.path === lessonData.path) {
      nextLink = {
        title: nextLesson.title,
        href: `/course/${nextLesson.path}`,
      };
    }
  }

  if (nextLink === null) {
    nextLink = nextModuleLink;
  }

  return {
    props: {
      lessonData,
      moduleData,
      courseData,
      lessonContent: lessonMarkdown.content,
      lessonFrontmatter: lessonMarkdown.data,
      previousLink,
      nextLink,
    },
  };
}

export async function getStaticPaths() {
  //get all .md files in the posts dir
  const lessons = glob.sync("content/courses/**/*.md");

  const lessonPaths = lessons
    .filter((lesson) => lesson.indexOf("index.md") === -1)
    .map((course) => course.replace("content/courses/", "").replace(".md", ""));
  console.log("lesson paths", lessonPaths);

  // create paths with `slug` param
  const paths = lessonPaths.map((slug) => `/course/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
