import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Service from './Pages/Service';
import Forum from './Pages/Forum';
import About from './Pages/About';
import Login from './Components/login';
import Registration from './Pages/Registration';
import Error from './Components/Error';

const App = () => {
  const [login, setLogin] = useState(false)

  const tooglelogin = () => {
    setLogin(!login)
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home login={login} tooglelogin={tooglelogin}/>}></Route>
        <Route path='/services' element={<Service login={login} tooglelogin={tooglelogin}/>}></Route>
        <Route path='/forum' element={<Forum login={login} tooglelogin={tooglelogin}/>}></Route>
        <Route path='/about' element={<About login={login} tooglelogin={tooglelogin}/>}></Route>
        <Route path='/regitration' element={<Registration login={login} tooglelogin={tooglelogin}/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
