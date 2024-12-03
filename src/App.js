import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TabBar from './components/TabBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <TabBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
