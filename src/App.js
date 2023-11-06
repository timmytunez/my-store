import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layouts from './components/Layouts';
import House from './pages/House';
import About from './pages/About';
import Contact from './pages/Contact';
import Ourstore from './pages/Ourstore';



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Layouts/>}>
          <Route path='/'  element = {<House/>} />
          <Route  element= {<About/>}/>
          <Route  element= {<Contact/>}/>
          <Route path='/store' element= {<Ourstore/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
