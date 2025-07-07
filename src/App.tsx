// src/App.tsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Loader from './Components/Loader';
const NotFound = lazy(() => import ('./Components/NotFound'));
const Home = lazy(() => import('./Pages/Home'));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/*" element={<NotFound/>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
