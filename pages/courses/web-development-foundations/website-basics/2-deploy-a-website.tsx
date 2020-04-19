import "../../../../styles/index.css";
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Layout from "../../../../components/Layout";

import Head from "next/head";
import CourseLayout from "../../../../components/CourseLayout";
import { toc } from "../toc";
import { getPagerOptions } from "../../../../components/CourseLayout";
import { PagerOptions } from "../../../../models/index";

interface Props {
  pagerOptions: PagerOptions;
}

export default ({ pagerOptions }: Props) => {
  return (
    <CourseLayout pagerOptions={pagerOptions}>
      <Head>
        <title>Deploy a website</title>
      </Head>

      <div className="relative bg-white overflow-hidden max-w-screen-xl mx-auto">
        Deploy a website
      </div>
    </CourseLayout>
  );
};

export const path =
  "/courses/web-development-foundations/website-basics/2-deploy-a-website";

export async function getStaticProps() {
  const pagerOptions = getPagerOptions(path, toc);

  return {
    props: {
      pagerOptions,
    },
  };
}
