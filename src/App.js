import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar/navbar.jsx";





//import PostDetails from "./Components/PostDetials";
//import Product1 from "./Components/Product1";

import Card from "./Components/Cards";
import Omgs from "./Components/Cards/Omgs.js";
import Kiyaai from "./Components/Cards/Kiyaai.js";
import Homeo from "./Components/Cards/Homeo.js";
import Nike from "./Components/Cards/Nike.js";
import Review from './Components/Review';
import Addreview from './Components/Addreview'
import Edit from "./Components/Addreview/Edit.js";
import Myntra from './Components/Cards/Myntra.js'
import Glossdore from "./Components/Cards/Glossdore.js";
import Fate from "./Components/Cards/Fate.js";
import Tcs from "./Components/Cards/Tcs.js";
import Wipro from "./Components/Cards/Wipro.js";
import Hcl from "./Components/Cards/Hcl.js";
import Infosis from "./Components/Cards/Infosis.js";
import ReviewDetails from "./Components/ReviewDetails/index.js";







function App(){
  return (
  <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/card" element ={<Card/>}/>
      <Route path="/omgs" element= {<Omgs/>}/>
      <Route path="/myntra" element={<Myntra/>}/>
      <Route path="/glossdore"element={<Glossdore/>}/>
      <Route path="/fate"element={<Fate/>}/>
      <Route path="/kiyaai" element={<Kiyaai/>}/>
      <Route path="/homeo" element={<Homeo/>}/>
      <Route path="/nike" element={<Nike/>}/>
      <Route path="/review"element={<Review/>}/>
      <Route path="/addreview"element={<Addreview/>}/>
      <Route path="/edit"element={<Edit/>}/>
      <Route path="/tcs"element={<Tcs/>}/>
      <Route path="/wipro"element={<Wipro/>}/>
      <Route path="/hcl"element={<Hcl/>}/>
      <Route path="/infosis"element={<Infosis/>}/>
      <Route path="/reviewdetials"element={<ReviewDetails/>}/>
      
    
      
      
      
      
      
  
      
    </Routes>
    </div>
  );
}

export default App;
