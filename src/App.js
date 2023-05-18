import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import About from './components/About';

function App() {

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type :type
    })

    setTimeout(() => {
     setAlert(null) 
    }, 2000);
  }

  const [mode , setMode] = useState("light")

  console.log(mode);

  // const toggleMode = ()=>{
  //   if (mode === "light"){
  //     setMode("dark")
  //     document.body.style.backgroundColor = "#3b29a0"
  //     // showAlert("Dark mode enabled.", "success")
  //   }else{
  //     setMode("light")
  //     document.body.style.backgroundColor = "white"
  //     // showAlert("Dark mode disabled.", "success")
  //   }
  // }

  const toggleMode = (theme)=>{
    if (theme === "dark"){
      setMode("dark")
      document.body.style.backgroundColor = "#3b29a0"
      document.title = "TextUtils - Dark Mode"
    }else if(theme === "red"){
      setMode("red")
      document.body.style.backgroundColor = "red"
      document.title = "TextUtils - Red Mode"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      document.title = "TextUtils - Light Mode"
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>

          <Route path='/' element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} isActive="active"/>}/>          
          <Route path='/about' element={<About isActive="active"/>}/>
        
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
