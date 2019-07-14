import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Actors from "./components/actors";
import Home from "./components/home";


function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">

                    <Link to="/actors">Actors</Link>
                    <Link to="/">Home</Link>


                </header>
                <Route path="/actors" component={Actors}/>
                <Route path="/" component={Home}/>



            </div>
        </Router>
    );
}

export default App;
