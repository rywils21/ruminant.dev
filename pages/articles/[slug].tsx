import "../../styles/index.css";
import Layout from "../../components/Layout";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import glob from "glob";
import Head from "next/head";
import { MarkdownRenderer } from "../../components/MarkdownRenderer";
import { InArticleNewsletterForm } from "../../components/InArticleNewsletterForm";
import { RyanWilson } from "../../components/Authors";
import moment from "moment";

export default (props) => {
  return (
    <Layout>
      <Head>
        <title>{props.frontmatter.title}</title>
      </Head>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="text-gray-500">
          {moment(props.frontmatter.published).format("MMMM D, Y")}
        </div>
        <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
          {props.frontmatter.title}
        </h1>
        <RyanWilson />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <MarkdownRenderer content={props.markdownBody} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-36 flex justify-center">
        <InArticleNewsletterForm />
      </div>
    </Layout>
  );
};

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;
  const content = await import(`../../content/articles/${slug}.md`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}

export async function getStaticPaths() {
  //get all .md files in the posts dir
  const blogs = glob.sync("content/articles/**/*.md");

  //remove path and extension to leave filename only
  const blogSlugs = blogs.map((file) =>
    file.split("/")[2].replace(/ /g, "-").slice(0, -3).trim()
  );

  // create paths with `slug` param
  const paths = blogSlugs.map((slug) => `/articles/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
