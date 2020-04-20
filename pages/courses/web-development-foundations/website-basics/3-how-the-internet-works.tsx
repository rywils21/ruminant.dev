import "../../../../styles/index.css";
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Layout from "../../../../components/Layout";

import Head from "next/head";
import CourseLayout from "../../../../components/CourseLayout";
import { toc } from "../../../../content/toc";
import { PagerOptions } from "../../../../models/index";
import { getPagerOptions } from "../../../../components/CourseLayout";

interface Props {
  pagerOptions: PagerOptions;
}

export default ({ pagerOptions }: Props) => {
  return (
    <CourseLayout pagerOptions={pagerOptions}>
      <Head>
        <title>Home</title>
      </Head>

      <div className="relative bg-white overflow-hidden max-w-screen-xl mx-auto">
        How the internet works
      </div>
    </CourseLayout>
  );
};

export const path =
  "/courses/web-development-foundations/website-basics/3-how-the-internet-works";

export async function getStaticProps() {
  const pagerOptions = getPagerOptions(path, toc);

  return {
    props: {
      pagerOptions,
    },
  };
}
