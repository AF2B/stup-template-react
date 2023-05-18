import React from 'react';
import { Route, Routes } from 'react-router-dom';

import App from '../App';
import Page404 from '../pages/404';

const PageRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="app" element={<Page404 />} />
    </Routes>
  );
}

export default PageRoutes;
