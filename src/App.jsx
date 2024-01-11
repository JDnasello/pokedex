import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import './App.css'
import SearchPokemon from './components/SearchPokemon.jsx'
import ContextProvider from './context/ContextProvider.jsx'
import { lazy } from 'react'

const PokedexLazy = lazy(() => import('./pages/Pokedex.jsx'));
const PokemonPageLazy = lazy(() => import('./pages/PokemonPage.jsx'));
const SearchPokemonsPageLazy = lazy(() => import('./pages/SearchPokemonsPage.jsx'));

function App() {
  
  return (
    <ContextProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokedex' element={<SearchPokemon />} >
          <Route path='/pokedex' element={<PokedexLazy />} />
          <Route path='pokemon/:id' element={<PokemonPageLazy />} />
          <Route path='search/*' element={<SearchPokemonsPageLazy />} />
        </Route>
      </Routes>
    </ContextProvider>
  )
}

export default App
