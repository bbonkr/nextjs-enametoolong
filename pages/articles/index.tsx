import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { Article } from "../../models";

// revalidation is enabled and a new request comes in
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/articles`);
  const posts: Article[] = await res.json();

  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
};

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
// export const getStaticPaths: GetStaticPaths = async (context) => {
//   const res = await fetch(`http://localhost:3000/api/articles`);
//   const posts: Article[] = await res.json();

//   // Get the paths we want to pre-render based on posts
//   const paths = posts.map((post) => ({
//     params: { slug: post.slug },
//   }));

//   // We'll pre-render only these paths at build time.
//   // { fallback: blocking } will server-render pages
//   // on-demand if the path doesn't exist.
//   return { paths, fallback: "blocking" };
// };

const ArticlesPage = ({ posts }: { posts: Article[] }) => {
  return (
    <div>
      <h1>Articles</h1>
      <hr />
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/articles/${encodeURIComponent(post.slug)}`}>
                {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticlesPage;
