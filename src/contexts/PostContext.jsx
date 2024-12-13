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

  const [postsData, setPostsData] = useState({
    posts: [],
  });

  return (
    <PostContext.Provider value={postsData}>{children}</PostContext.Provider>
  );
};
