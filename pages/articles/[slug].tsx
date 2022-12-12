// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if

import { GetStaticPaths, GetStaticProps } from "next";
import { Article } from "../../models";
import { sampleFileUri } from "../../sampleFile";

// revalidation is enabled and a new request comes in
export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug;

  let slugValue = "";
  if (typeof slug === "string") {
    slugValue = slug;
  }

  const res = await fetch(sampleFileUri);
  const posts: Article[] = await res.json();

  const post = posts.find((x) => x.slug === slugValue);

  if (post) {
    return {
      props: {
        post,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      revalidate: 10, // In seconds
    };
  } else {
    return {
      notFound: true,
    };
  }
};

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export const getStaticPaths: GetStaticPaths = async (context) => {
  const res = await fetch(sampleFileUri);
  const posts: Article[] = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
};

const ArticlesSlugPage = ({ post }: { post?: Article }) => {
  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.slug}</p>
      <hr />
      <p>{post?.body}</p>
    </div>
  );
};

export default ArticlesSlugPage;
