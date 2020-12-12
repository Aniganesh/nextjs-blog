import Layout from "../../components/Layout";
import Head from "next/head";
import { getPostData, getAllPostIds } from "../../lib/posts";
// import Date from "../../components/date";

export const Post = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {/* <Date dateString={postData.date} /> */}
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return { props: { postData } };
};

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return { paths, fallback: false };
};
export default Post;
