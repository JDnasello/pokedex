import { Link, Outlet, useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import { Suspense, useContext } from 'react';
import { PokemonContext } from '../context/Context';
import { lowerCase } from '../functions/functions';

const SearchPokemon = () => {

    const navigate = useNavigate()

    const { searchValue, inputChange, resetForm } = useContext(PokemonContext)

    const searchSubmit = (e) => {
        e.preventDefault()
        navigate('search', {
            state: searchValue
        })
        resetForm()
    }

    return (
        <>
        <header>
            <div className='container-header'>
                    <Link to='/pokedex'><h1 className='custom-font'>Pokedex</h1></Link>
                    <form onSubmit={searchSubmit}>
                        <input type="search" name='searchValue'
                            onChange={inputChange} value={lowerCase(searchValue)}
                            placeholder='Search Pokemons' />
                        <button className='btn-search'>{<SearchIcon fontSize='small' style={{ color: '#fff' }} />}</button>
                    </form>
            </div>
            </header>
            <Suspense fallback={
                <div className='loading-icon'>
                    <l-tailspin
                        size="60"
                        stroke="7"
                        speed="1"
                        color="rgb(51, 108, 240)"
                    ></l-tailspin>
                </div>}>
                <Outlet />
            </Suspense>
        </>
    )
}

export default SearchPokemon
