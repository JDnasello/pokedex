import { Link } from "react-router-dom"
import fondoInicio from '../img/fondo-inicio-pokemon.gif'

const Home = () => {
    return (
        <>
            <div className="container-inicio"> 
                <div>
                    <h1 className="custom-font">Welcome to the Pokedex</h1>
                    <h3>Here you will find all the existing pokemon species</h3>
                </div>
                <Link to='/pokedex'><button>Go to the Pokedex</button></Link>
                <img src={fondoInicio} alt="fondo inicio" />
            </div>
        </>
    )
}

export default Home
