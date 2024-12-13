import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUsPage from "./pages/AboutusPage";
import PostListPage from "./pages/PostListPage";
import HomePage from "./pages/HomePage";
import DefaultLayout from "./components/layout/DefaultLayout";
import SinglePostPage from "./pages/SinglePostPage";

function App() {
  return (
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
  );
}

export default App;
