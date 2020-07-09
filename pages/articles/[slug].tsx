import "../../styles/index.css";
import Layout from "../../components/Layout";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import glob from "glob";
import Head from "next/head";

export default (props) => {
  return (
    <Layout>
      <Head>
        <title>{props.frontmatter.title}</title>
      </Head>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">
          {props.frontmatter.title}
        </h1>
        <img
          src={props.frontmatter.headerImg}
          alt={props.frontmatter.headerAlt}
        />
      </div>

      <div>
        <ReactMarkdown source={props.markdownBody} />
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
