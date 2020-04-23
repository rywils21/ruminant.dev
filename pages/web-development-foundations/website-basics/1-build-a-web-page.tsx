import "../../../../styles/index.css";

import Head from "next/head";
import CourseLayout from "../../../components/CourseLayout";
import { toc } from "../../../content/toc";
import { getPagerOptions } from "../../../components/CourseLayout";
import { PagerOptions } from "../../../models/index";

interface Props {
  pagerOptions: PagerOptions;
}

export default ({ pagerOptions }: Props) => {
  return (
    <CourseLayout pagerOptions={pagerOptions}>
      <Head>
        <title>Build a web page</title>
      </Head>

      <div className="relative bg-white overflow-hidden max-w-screen-xl mx-auto">
        Build a web page
      </div>
    </CourseLayout>
  );
};

export const path =
  "/courses/web-development-foundations/website-basics/1-build-a-web-page";

export async function getStaticProps() {
  const pagerOptions = getPagerOptions(path, toc);

  return {
    props: {
      pagerOptions,
    },
  };
}
