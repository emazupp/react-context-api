import { createContext, useState, useContext, useEffect } from "react";

// * CREAZIONE CONTESTO
const PostContext = createContext();

// * CONSUMER
export const usePostContext = () => useContext(PostContext);

// * PROVIDER
export const PostProvider = ({ children }) => {
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((posts) => {
        const newPosts = { ...postsData, posts };
        setPostsData(newPosts);
      });
  };

  const fetchDeletePost = (id) => {
    fetch(`http://localhost:3000/posts/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        fetchPosts();
        console.log(data);
      });
  };

  const [postsData, setPostsData] = useState({
    posts: [],
    deletePost: fetchDeletePost,
  });

  return (
    <PostContext.Provider value={postsData}>{children}</PostContext.Provider>
  );
};
