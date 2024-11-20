import React from 'react'
import Home from './pages/Home'
import Course from './components/Course'
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signup from './components/Signup';


export default function App() {

  const path = useLocation();

  return (
    <div className='dark:bg-slate-900 dark:text-white'>
      {path.pathname !== "/signup" ? <Navbar /> : null}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<Course />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      {path.pathname !== "/signup" ? <Footer /> : null}
    </div>
  )
}
