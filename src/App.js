// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light")//darkmode or lightmode
  const [theme, settheme] = useState("#0000ff")
  const [alert, setalert] = useState(null)
  const togglemode=()=>{
    if(mode==='dark'){
      setmode('light');
      document.body.style.backgroundColor='white';    
      showalert("Switched to light mode","danger")
    }
    else{
      document.body.style.backgroundColor='#042743';    
      setmode('dark');
      showalert("Switched to dark mode","warning")
    } 
  }
  const themeChanger=()=>{
    let val=document.getElementById("flexSwitchCheckDefault");
    val.colorpicker().on('changeColor',function(e){
      console.log(e.color.toString('rgba'));
      settheme(e.color.toString('rgba'));
      document.body.style.backgroundColor=theme; 
    });
    
  }
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  return (
    <>
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode} theme={theme} themeChanger={themeChanger} />
        <Alert alert={alert} />
        <div className="container w-75">
          <Textform heading="Enter the text below"  mode={mode} showalert={showalert} />
        </div>
    </>
  );
}

export default App;
