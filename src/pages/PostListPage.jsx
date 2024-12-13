import Card from "../components/Card";
import { usePostContext } from "../contexts/PostContext";

export default function PostListPage() {
  const { posts } = usePostContext();
  console.log(posts);
  return (
    <main>
      <div className="container">
        <h1>Post list</h1>
        <div className="row g-3 mt-5">
          {posts &&
            posts.map((post) => {
              return (
                <Card
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  image={`http://localhost:3000/${post.image}`}
                  author={post.author}
                />
              );
            })}
        </div>
      </div>
    </main>
  );
}
