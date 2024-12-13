import { createContext, useState, useContext } from "react";

const PostContext = createContext();

// * CONSUMER
export const usePostContext = () => useContext(PostContext);

// * PROVIDER
export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState();

  const globalData = {
    posts: ["ciao"],
  };

  /* useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => fetchPosts(data));
  }, []);

  const fetchPosts = (posts) => {
    setPosts(posts);
  }; */

  return (
    <PostContext.Provider value={globalData}>{children}</PostContext.Provider>
  );
};
