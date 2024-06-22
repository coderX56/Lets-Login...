
import './index.css';
import download from "./download.jpeg";
import travel from "./travel.jpg";
import { Grid, Link,TextField,Checkbox,Button} from '@mui/material'; 
import { useState } from 'react';

import 'tailwindcss/tailwind.css';

export  default   function Home() {
const [formdata,setformdata]=useState({EmailAddress:"" ,Password:""});
const handlechange= (evt) =>{
const changedfeild=evt.target.name;
const newvalue=evt.target.value;
setformdata ((currdata)=>{
currdata[changedfeild]=newvalue;
return{...currdata};  });

};
const handleSubmit=()=> {
console.log(formdata);
};


const login=async function(EmailAddress,Password)  {
    if(!EmailAddress || !Password) throw 'missing credentials'
    if(Password===113) return 'welcome'; throw 'welcome'
}
login('evt.target.EmailAddress','evt.target.Password')
   .then((msg)=>{console.log('logedin')})
   .catch((err)=>{console.log('errr')})
  
return (
<div className="Home" >
  <div className="container">
      <img src={download} alt="logo" backgroundColor="primary"/> <br/>
      <h2>Sign in</h2>
    <TextField  label="Email Address" fontWeight='fontWeightLight' fontFamily='monospace' variant='filled'
       sx={{ mt:2,width:2/3}}  value={formdata.EmailAddress}  name="EmailAddress" onChange={handlechange}/> <br/>
    <TextField label="Password" type='password'required variant="filled"
       sx={{ mt:2,width:2/3,mb:2}}  value={formdata.Password}  name="Password" onChange={handlechange}/> <br/>
   
      <Grid container spacing={10}>
      <Grid item xs> <Checkbox  defaultChecked   label="nc"/> </Grid>
        <Grid item xs  sx={{mt:1/3}} > <Link>Forgot Password?</Link></Grid>
        
    </Grid>
    
    <Button  type ="submit" fullWidth  variant="contained"  sx={{ml:2,mt:4,width:2/3}} onClick={handleSubmit}>Submit</Button>
    <h1 className='bg-green-600'>hgchg</h1>
    <nav className="mx-0"><ul className="mx-59"><li class="bg-purple">home</li><li>home</li><li>home</li></ul></nav>
   </div>

</div> 
);

}



<nav className=" bg-slate-300 max-w-full h-11 mt-3 ml-8 text-2xl border-solid text-black font-mono">
        <ul className="flex space-x-8 text-black my-5 "> 
          <li className="cursor-pointer hover:text-gray-400">HOME</li>
          <li className="cursor-pointer hover:text-gray-400">AVOUT</li>
          <li className="cursor-pointer hover:text-gray-400">CONTACT US</li>
          <li className="cursor-pointer hover:text-gray-400">GALLARY</li>
          <ul className="flex justify-end ">
            <li className=""><button className="  w-30 round-md align-middle hover:text-black">Login</button></li>
            <li><button className="  h-9 w-24 ml-8 mt-1 rounded-xl align-middle bg-blue-400 cursor-pointer">Login</button></li>
          </ul>
        </ul> 
       </nav>


<ul className="flex justify-center text-xl md:flex-row  md:space-x-8 mt-4  md:font-medium">
<li>
<a href="#" class="text-gray-700 hover:bg-gray-50 border-b   border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Home</a>
</li>
<li>
  <a href="#" class="text-gray-700 hover:bg-gray-50 border-b   border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">About</a>
</li>
<li>
  <a href="#" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 ">Services</a>
</li> 
<li>
  <a href="#" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 ">Contact Us</a>
</li> 
<li><input type="text" className="bg-gray-50 rounded-md"></input></li>
</ul> 