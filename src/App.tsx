// src/App.tsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Pages/Home'));
const NotFound = lazy(() => import('./Components/NotFound'));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<NotFound/>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
