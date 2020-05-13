import "../styles/index.css";
import Layout from "../components/Layout";
import { ContactForm } from "../components/ContactForm";
import Head from "next/head";

export default () => {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <h1 className="text-2xl font-semibold text-gray-900">Contact Me</h1>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
};
