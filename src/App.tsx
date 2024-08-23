import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostsPage from './pages/posts-page';
import PostPage from './pages/post-page';
import { useGetPostsQuery } from './services/post-api';

const App: React.FC = () => {
  useGetPostsQuery();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
