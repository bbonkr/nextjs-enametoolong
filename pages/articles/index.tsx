import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { Article } from "../../models";
import { sampleFileUri } from "../../sampleFile";

// revalidation is enabled and a new request comes in
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(sampleFileUri);
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
