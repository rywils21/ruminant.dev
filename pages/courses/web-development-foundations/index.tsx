import "../../../styles/index.css";
import Layout from "../../../components/Layout";
import Link from "next/link";

import Head from "next/head";

export default () => {
  return (
    <Layout>
      <Head>
        <title>Web Development Foundations</title>
      </Head>

      <div className="relative bg-white overflow-hidden">
        Welcome to Web Development Foundations
        <div>
          <Link href="/courses/web-development-foundations/0/introduction">
            <a>0: Introduction</a>
          </Link>
        </div>
        <div>
          <Link href="/courses/web-development-foundations/1/build-a-web-page">
            <a>1: Build a web page</a>
          </Link>
        </div>
        <div>
          <Link href="/courses/web-development-foundations/2/deploy-a-website">
            <a>2: Deploy a website</a>
          </Link>
        </div>
        <div>
          <Link href="/courses/web-development-foundations/3/how-the-internet-works">
            <a>3: How the internet works</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};
