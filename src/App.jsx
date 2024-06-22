
import {BrowserRouter,Routes, Route } from 'react-router-dom';
import  New from './New.js'  ;
import './index.css';
import 'tailwindcss/tailwind.css';
import SignUp from './SignUp.js';




 export default function App() {
  return (
   <BrowserRouter>
   <Routes>
        <Route path="/" element={<New/>} ></Route>
        <Route path="/signup" element={<SignUp/>} ></Route>
   </Routes>
     
 </BrowserRouter>
    
  
   
     // <Sea/>

    
    
  
  );

 }
  
