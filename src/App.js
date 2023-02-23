import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import styled from 'styled-components'
// import { Button } from '@mui/material'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faTwitter,
//   faDiscord,
//   faInstagram
// } from '@fortawesome/free-brands-svg-icons'

import './App.css'
import LandingPage from './components/LandingPage/LandingPage';
import Roadmap from './components/Roadmap/Roadmap'
import TheForest from './components/TheForest/TheForest'
import KrewBrew from './components/KrewBrew/KrewBrew'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/roadmap' element={<Roadmap/>}/>
        <Route path='/theforest' element={<TheForest/>}/>
        <Route path='/krewbrew' element={<KrewBrew/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
