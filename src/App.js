import { useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import Categories from './components/Categories';
import NewsList from './components/NewsList';
import NewsPage from './pages/NewsPage';

const App = () => {
  return (
    <Routes>
      <Route index element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
};

export default App;
