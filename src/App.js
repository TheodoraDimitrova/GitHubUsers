import React from "react";
import { Routes, Route } from "react-router-dom";

import GitHubState from "./context/github/GitHubState";
import AlertState from "./context/alert/AlertState";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import Details from "./components/users/Details";
import NotFound from "./components/pages/NotFound";
import "./App.css";
import './pageNotFound'

const App = () => {
  return (
    <GitHubState>
      <AlertState>
        <div className="App">
          <Navbar />
          <div className="container">
            <main>
            <Alert />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route exact path="/details/:username" element={<Details />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
            </main>
            
          </div>
          <Footer />
        </div>
      </AlertState>
    </GitHubState>
  );
};

export default App;
