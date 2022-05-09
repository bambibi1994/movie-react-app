import React from 'react';
import ReactDOM from 'react-dom/client';
import Board from './components/Board';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

class About extends React.Component {
    render() {
        return (
            <div>
                <h1>This is my movie</h1>
                <h2>Create by: Quang Do</h2>
            </div>
        );
    }
}

class Home extends React.Component {
    render() {
        return (
            <div>
                <Board />
            </div>
        );
    }
}

class MyRoutes extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <hr />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/About" element={<About />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}

//NavBar
class Navbar extends React.Component {
    render() {
        return (
            <div className="nav">
                <Link to="/">Home</Link> |
                <Link to="about">About</Link>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyRoutes />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
