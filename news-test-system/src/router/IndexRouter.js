import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Index from '../views/Index';
import NewsSandBox from '../views/NewsSandBox';
import TestPage from '../views/TestPage';


export default function IndexRouter() {
  return (
      <HashRouter>
        <Routes>
           <Route path='/newsSandBox' element={<Index/>}/>
           <Route path='/home' element={<Home/>}/>
           <Route path='/' element={<NewsSandBox/>}/>
           <Route path='/testPage' element={<TestPage/>}/>
        </Routes>
      </HashRouter>
  )
}
