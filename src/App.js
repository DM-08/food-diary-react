/*import logo from './logo.svg';
import rocket from './rocket.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={rocket} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go To Welcome Page!
        </a>
      </header>
    </div>
  );
}

export default App;

*/
// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
// Define your components (pages)
//const Home = () => <h2>Home Page!</h2>;
//const About = () => <h2>About Page</h2>;
//const Contact = () => <h2>Contact Page</h2>;

const App = () => {



    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                {/*<Route path="/contact" element={<Contact />} />*/}
            </Routes>
        </Router>
        
    );
};

export default App;
