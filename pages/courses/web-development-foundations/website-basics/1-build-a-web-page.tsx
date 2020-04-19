import "../../../../styles/index.css";

import Head from "next/head";
import CourseLayout from "../../../../components/CourseLayout";
import { toc } from "../toc";

export default () => {
  return (
    <CourseLayout modules={toc}>
      <Head>
        <title>Home</title>
      </Head>

      <div className="relative bg-white overflow-hidden max-w-screen-xl mx-auto">
        Build a web page
      </div>
    </CourseLayout>
  );
};
