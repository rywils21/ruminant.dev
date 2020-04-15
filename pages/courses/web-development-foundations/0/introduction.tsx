import "../../../../styles/index.css";
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Layout from "../../../../components/Layout";

import Head from "next/head";

export default () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>

      <div className="relative bg-white overflow-hidden">
        Introduction to Web Development Foundations
      </div>
    </Layout>
  );
};
