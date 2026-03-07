import React from 'react';
import {ScrollTrigger, SplitText} from 'gsap/all';
import Navbar from './components/Navbar'; 
import Hero from './components/Hero'; 
import gsap from 'gsap';
import Cocktails from './components/Cocktails';
import About from './components/About.jsx';
import Art from './components/Art.jsx';
gsap.registerPlugin(ScrollTrigger, SplitText);


const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
     	 <About />
	      <Art />
    </main>
    
  )
}

export default App;