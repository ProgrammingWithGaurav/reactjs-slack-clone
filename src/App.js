import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './components/Chat/Chat';
import { useStateValue } from './components/StateProvider';
import Login from './components/Login/Login';

function App() {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app-body">
              <Sidebar />
              <Routes>
                <Route path="/room/:roomId" element={<Chat />} />
                <Route path="/" element={<h1>Welcome</h1>} />
              </Routes>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
