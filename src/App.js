//import React, { useEffect, useState } from 'react'
import {Component} from 'react'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Body from './components/Body'


import Header1 from './components/Header1'

import About from './components/About'

  class App extends Component {
    
  
    render() {
      
  return (
    <BrowserRouter>
    
      <Routes>
          <Route path='/header1' Component={Header1}/>
          <Route path='/' Component={Body}/>
          <Route path='/about' Component={About}/>
          
         
          
      </Routes>
      
    
    </BrowserRouter>
  )
}
  }
export default App