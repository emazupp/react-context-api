import PostCard from "../components/PostCard";
import { usePostContext } from "../contexts/PostContext";

export default function PostList() {
  const { posts } = usePostContext();

  return (
    <>
      <h1>Post list</h1>
      <div className="row g-3 mt-5">
        {posts &&
          posts.map((post) => {
            return (
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                image={`http://localhost:3000/${post.image}`}
                author={post.author}
              />
            );
          })}
      </div>
    </>
  );
}
