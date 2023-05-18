import React from 'react';
import { BrowserRouter ,Routes } from 'react-router-dom';

import PageRoutes from './PageRoutes';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
        <PageRoutes />
    </BrowserRouter>
  );
}

export default AppRoutes;
