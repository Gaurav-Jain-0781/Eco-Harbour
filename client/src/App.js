import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Home from './Pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/regitration' element={<Registration/>}></Route>
        {/* <Route path='*' element={<Error/>}></Route> */}
      </Routes>
    </Router>
  )
}

export default App;
