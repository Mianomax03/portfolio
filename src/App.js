import './App.css';
import  Navbar from './components/Navbar';
import  Hero from './components/Hero';
import  Work from './components/work';
import Experience from './components/experience';
import Contact from './components/contact';
import { BrowserRouter } from 'react-router-dom';
import images from "./resources/assets/png/background5.jpg"


import useLocalStorage from "use-local-storage"
import { Center } from '@react-three/drei';

function App() {
const [theme,setTheme]=useLocalStorage('theme'?'light' :'dark')

const toggleTheme = ()=>{
     const newTheme =theme=== 'dark'?'light':'dark';
     setTheme(newTheme)
}

  return (
    <BrowserRouter>
    <div className="app"  data-theme={theme}
        style={{
          backgroundColor: "var(--neutral-color-1)",
         alignItems:"Center"
          // backgroundImage: `url(${images})`,
          // webkitBackgroundSize: 'cover',
          // webkitBackgroundRepeat: 'no-repeat',
          // webkitBackgroundPosition: 'center',
          // webkitBackgroundSize: "cover"
          // -moz-background-size: cover;
          // -o-background-size: cover;
          // ,
          // minHeight: '100vh',
          // minWidth: '100%',
          //width: "100%",
          // height: "auto",
           //position: "fixed",
          //  top: "0",
          //  left: "0"
        }}
    >
     <Navbar theme={theme} toggleTheme={toggleTheme} />
     <Hero/>
     <Experience/>
     <Work/>
     <Contact/>
  
    </div>
    </BrowserRouter>
  );
}

export default App;
