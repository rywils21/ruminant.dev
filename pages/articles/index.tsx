import "../../styles/index.css";
import Layout from "../../components/Layout";
import Head from "next/head";
import matter from "gray-matter";
import glob from "glob";
import Link from "next/link";

export default ({ data }) => {
  console.log("data: ", data);
  return (
    <Layout>
      <Head>
        <title>Articles</title>
      </Head>

      <div className="bg-white mt-36">
        <div className="max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            There are no articles yet.
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

      {/* <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Articles</h1>
      </div> */}

      {/* <ul>
        {data.map(({ frontmatter, markdownBody, slug }) => (
          <li>
            <Link href={slug}>
              <a>{slug}</a>
            </Link>
          </li>
        ))}
      </ul> */}
    </Layout>
  );
};

// src/pages/index.js
export async function getStaticProps() {
  const slugs = glob
    .sync("content/articles/**/*.md")
    .map((file) => file.split("/")[2].replace(/ /g, "-").slice(0, -3).trim());

  const data = [];
  for (let i = 0; i < slugs.length; i++) {
    const slug = slugs[i];
    const content = await import(`../../content/articles/${slug}.md`);
    const document = matter(content.default);

    data.push({
      frontmatter: document.data,
      markdownBody: document.content,
      slug: `/articles/${slug}`,
    });
  }

  return {
    props: {
      data,
    },
  };
}
