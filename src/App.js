import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import Home from './pages/Home';
import Students from './pages/Students';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderComponent />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>&copy; 2026 Student Info App. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
