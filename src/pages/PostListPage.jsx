import Card from "../components/Card";
import { useEffect, useState } from "react";

export default function PostListPage() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => fetchPosts(data));
  }, []);

  const fetchPosts = (posts) => {
    setPosts(posts);
  };

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
