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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Articles</h1>
        </div>

        <ul>
          {data.map(({ frontmatter, markdownBody, slug }) => (
            <li>
              <Link href={slug}>
                <a>{slug}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
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
