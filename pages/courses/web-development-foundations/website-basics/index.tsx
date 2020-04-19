import "../../../../styles/index.css";
import Layout from "../../../../components/Layout";
import { CourseTOC } from "../../../../components/CourseTOC";

import Head from "next/head";
import { toc } from "../toc";
import CourseLayout from "../../../../components/CourseLayout";
import { getPagerOptions } from "../../../../components/CourseLayout";
import { PagerOptions } from "../../../../models/index";

const websiteBasicsTOC = [
  {
    module: null,
    lessons: toc[0].lessons,
  },
];

interface Props {
  pagerOptions: PagerOptions;
}

export default ({ pagerOptions }: Props) => {
  return (
    <CourseLayout pagerOptions={pagerOptions}>
      <Head>
        <title>Web Development Foundations</title>
      </Head>
      <div className="py-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
              Web Development Foundations
            </p>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Website Basics
            </h3>
            <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
              Learn concepts and best practices used by professional developers
              by building real websites and applications.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 mt-16 py-8 px-4 sm:px-6 lg:px-8">
        <CourseTOC modules={websiteBasicsTOC} />
      </div>
    </CourseLayout>
  );
};

export const path = "/courses/web-development-foundations/website-basics";

export async function getStaticProps() {
  const pagerOptions = getPagerOptions(path, toc);

  return {
    props: {
      pagerOptions,
    },
  };
}
