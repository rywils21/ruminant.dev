import "../../../../styles/index.css";
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Layout from "../../../../components/Layout";

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
        How the internet works
      </div>
    </CourseLayout>
  );
};
