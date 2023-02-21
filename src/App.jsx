import { redirect, Route, Routes } from 'react-router-dom'
import './App.css'
import Character from './Components/Character'
import Location from './Components/Locacion'
import Header from './Components/Header'
import Home from './Components/Home'
import Particle from './Components/Particle'
import Character_search from './Components/Character_search'

function App() {
  return (
    <>
      <Particle />
      <div className="App">
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/Character/:pages'
            element={<Character />}
          />
          <Route
            path='/Location'
            element={<Location />}
          />
          <Route path='/Character/search/:pages/:name' element={<Character_search />} />
        </Routes>
      </div>
    </>
  )
}

export default App
