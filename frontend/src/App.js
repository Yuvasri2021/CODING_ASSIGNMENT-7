// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import CreateAccount from './screens/CreateAccount';
import Deposit from './screens/Deposit';
import Withdraw from './screens/Withdraw';
import AllDetails from './screens/AllDetails';
import './App.css'; // Optional: Your global styles

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/deposit" element={<Deposit />} />
                <Route path="/withdraw" element={<Withdraw />} />
                <Route path="/alldetails" element={<AllDetails />} />
            </Routes>
        </Router>
    );
};

export default App;
