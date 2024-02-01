import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Service from './Pages/Service';
import Forum from './Pages/Forum';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Error from './Components/Error';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/services' element={<Service/>}></Route>
        <Route path='/forum' element={<Forum/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/regitration' element={<Registration/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
