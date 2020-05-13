import "../styles/index.css";
import Layout from "../components/Layout";
import Head from "next/head";
import Link from "next/link";

export default () => {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <div className="bg-white mt-36">
        <div className="max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            None of my projects are listed yet.
            <br />
            Stay tuned!
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="ml-3 inline-flex">
              <Link href="/">
                <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out">
                  Go to Home
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
