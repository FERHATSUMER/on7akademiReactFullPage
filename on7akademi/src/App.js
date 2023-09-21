import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Context from "./components/context/Context";
import CardComponet from "./pages/cardcomponent/CardComponetn";
function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Context />} />
            <Route path="/card" element={<CardComponet/>} />
          </Routes>
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
    </Router>
  );
}

export default App;
