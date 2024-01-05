import {Routes, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Pokedex from './pages/Pokedex.jsx'
import './App.css'
import SearchPokemon from './components/SearchPokemon.jsx'
import ContextProvider from './context/ContextProvider.jsx'
import PokemonPage from './pages/PokemonPage.jsx'
import SearchPokemonsPage from './pages/SearchPokemonsPage.jsx'

function App() {
  
  return (
    <ContextProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokedex' element={<SearchPokemon />} >
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='pokemon/:id' element={<PokemonPage />} />
          <Route path='search/*' element={<SearchPokemonsPage />} />
        </Route>
      </Routes>
    </ContextProvider>
  )
}

export default App
