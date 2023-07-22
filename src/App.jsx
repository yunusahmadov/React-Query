import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import Navigatoin from './components/Navigatoin'
import RQSuperHeroesPage from './components/RQSuperHeroesPage'
import SuperHeroesPage from './components/SuperHeroesPage'



function App() {
  return (
    <BrowserRouter>
  <Navigatoin/>
      <Routes>
      <Route path='/super-heroes' element={<SuperHeroesPage/>}/>
          <Route path='/rq-super-heroes' element={<RQSuperHeroesPage/>}/>
          <Route path='/' element={<HomePage />}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App

