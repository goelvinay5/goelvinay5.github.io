import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/home";
import DSA from "./components/DSA";

function App() {
  return (      
        <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/dsa' element={<DSA/>} />
        </Routes>
         {/* Remember to run "npm run deploy" after you push the chnages for them to reflect on site */}
      </Router>    
  );
}

export default App;
