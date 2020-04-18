import "../styles/index.css";
import Layout from "../components/Layout";
import { ContactForm } from "../components/ContactForm";
import Head from "next/head";

export default () => {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">About</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="py-4">
          Ruminant - An animal with a rumen. Someone who thinks a lot.
        </div>
      </div>
    </Layout>
  );
};
