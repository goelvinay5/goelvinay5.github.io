import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/home";
import DSA from "./components/dsa";

function App() {
  return (      
      <div>
        <Router>
        <Navbar />
        <Routes>
          <Route path='/home' component={Home} />
          <Route path='/dsa' component={DSA} />
        </Routes>
      </Router>

      <footer style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'bottom',
        height: '100vh'
        
      }}>
        <p className="footer-by">
          A project by{" "}
          <a
            href="https://github.com/goelvinay5"
            rel="noopener"
            className="small-link"
          >
            Vinay Goel
          </a>
          <a
            href="https://github.com/goelvinay5"
            rel="noopener"
            target="_blank"
            className="no-link icon-github"
            aria-label="Follow me on Github"
          ></a>
        </p>
      </footer>
      </div>
  );
}

export default App;
