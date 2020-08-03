import "../../styles/index.css";
import Layout from "../../components/Layout";
import Head from "next/head";
import matter from "gray-matter";
import glob from "glob";
import Link from "next/link";
import moment from "moment";
import { ClockIcon } from "../../components/Icons";
import { readingTime } from "../../utils/readingTime";

export default ({ data }) => {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <ul className="max-w-3xl">
          {data.map(({ frontmatter, markdownBody, slug }) => (
            <li className="border-t-2 mt-12" key={slug}>
              <div className="py-4">
                <div className="text-gray-700">
                  {moment(frontmatter.published).format("MMMM D, Y")}
                </div>
                <h2 className="text-3xl tracking-tight leading-tight font-bold text-gray-900">
                  {frontmatter.title}
                </h2>
                <div className="text-gray-500 flex items-center pt-1">
                  <ClockIcon className="w-4 h-4" />
                  <div className="px-2">{readingTime(markdownBody).text}</div>
                </div>
                <div className="text-gray-700 pt-4">
                  {frontmatter.description}
                </div>
                <div className="pt-8">
                  <Link href={slug}>
                    <a className="text-blue-500 hover:text-blue-700 font-semibold">
                      Read More
                    </a>
                  </Link>
                </div>
              </div>
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
    .sync("content/blog/**/*.md")
    .map((file) => file.split("/")[2].replace(/ /g, "-").slice(0, -3).trim());

  const data = [];
  for (let i = 0; i < slugs.length; i++) {
    const slug = slugs[i];
    const content = await import(`../../content/blog/${slug}.md`);
    const document = matter(content.default);

    data.push({
      frontmatter: document.data,
      markdownBody: document.content,
      slug: `/blog/${slug}`,
    });
  }

  return {
    props: {
      data,
    },
  };
}
