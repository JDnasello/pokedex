import { useContext } from "react"
import { PokemonContext } from "../context/Context.jsx"
import 'ldrs/tailspin'
import TuneIcon from '@mui/icons-material/Tune'
import Pokemons from "../components/Pokemons.jsx"
import FilterPokemons from "../components/FilterPokemons.jsx"
import '../App.css'

const Pokedex = () => {
    
    const { loading, filterBarActive, setFilterBarActive, loadMorePokemons } = useContext(PokemonContext)
    
    const toggleFilterBar = () => {
        setFilterBarActive(!filterBarActive)
    }

    return (
        <>

            {loading ?
                <div className="loading-icon">
                    <l-tailspin
                        size="60"
                        stroke="7"
                        speed="1"
                        color="rgb(51, 108, 240)"
                    ></l-tailspin>
                </div>
                : <div className="filter">
                    <button onClick={toggleFilterBar}
                        style={filterBarActive ? { backgroundColor: '#999'} : { backgroundColor: '#eee' }}>
                        <TuneIcon className="filter-icon" style={{ color: '#666' }} />
                        <span>Filtrar</span>
                    </button>
                </div>}
            {!loading && <div className="container-pokedex">
                <FilterPokemons />
                <Pokemons />
                <button className="btn-load-more-pokemons" onClick={loadMorePokemons}>Load more Pokemons</button>
                    
            </div>}
        </>
    )
}

export default Pokedex
