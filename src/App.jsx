import { BrowserRouter, Routes, Route } from "react-router-dom";

// context
import { PostProvider } from "./contexts/PostContext";

// pages
import AboutUsPage from "./pages/AboutusPage";
import PostListPage from "./pages/PostListPage";
import HomePage from "./pages/HomePage";
import SinglePostPage from "./pages/SinglePostPage";

// layout
import DefaultLayout from "./components/layout/DefaultLayout";

function App() {
  return (
    <PostProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" Component={HomePage} />
            <Route path="/aboutus" Component={AboutUsPage} />
            <Route path="/posts" Component={PostListPage} />
            <Route path="/posts/:id" Component={SinglePostPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PostProvider>
  );
}

export default App;
