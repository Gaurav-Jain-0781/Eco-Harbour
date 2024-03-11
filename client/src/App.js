import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Service from './Pages/Service';
import Forum from './Pages/Forum';
import Post from './Pages/Post.js'
import About from './Pages/About';
import Registration from './Pages/Registration';
import LoginPage from './Pages/LoginPage';
import DashBoardPage from './Pages/DashBoardPage'
import SingleHarbourPage from './Pages/SingleHarbourPage'
import SingleFishPage from './Pages/SingleFishPage';
import Error from './Components/Error';

const App = () => {
  const [login, setLogin] = useState(false)

  const tooglelogin = () => {
    setLogin(!login)
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home login={login} />}></Route>
        <Route path='/services' element={<Service login={login} />}></Route>
        <Route path='/forum' element={<Forum login={login} />}></Route>
        <Route path='/forum/post' element={<Post/>}></Route>
        <Route path='/about' element={<About login={login} />}></Route>
        <Route path='/regitration' element={<Registration login={login}/>}></Route>
        <Route path='/login' element={<LoginPage login={login} tooglelogin={tooglelogin}/>}></Route>
        <Route path='/dashboard' element={<DashBoardPage />}></Route>
        <Route path='/single-harbour/:id' element={<SingleHarbourPage/>}></Route>
        <Route path='/single-fish/:id' element={<SingleFishPage/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
