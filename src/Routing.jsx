import React from 'react'
import {  Routes,Route, } from 'react-router-dom'
import News from './News'
import AppleNews from './AppleNews'
import TeslaNews from './TeslaNews'
import BusinessNews from './BusinessNews'
import TechNews from './TechNews'
import Home from './Home'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/applenews' element={<AppleNews/>}/>
            <Route path='/teslanews' element={<TeslaNews/>}/>
            <Route path='/technews' element={<TechNews/>}/>
            <Route path='/businessnews' element={<BusinessNews/>}/>
        </Routes>
    </div>
  )
}

export default Routing