import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/home";
import DSA from "./components/dsa";

function App() {
  return (      
        <Router>
        <Navbar />
        <div  style={{background: '#E8E8E8'}}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/dsa' element={<DSA/>} />
        </Routes>
         {/* Remember to run "npm run deploy" after you push the chnages for them to reflect on site */} 
      </div> 
      </Router>  
  );
}

export default App;
