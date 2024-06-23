import { Link } from "react-router-dom";


const Navbar = () => {

    return <>
    <nav>
        <div> 
            <img className="nav-logo" src="./src/assets/logo-marvel.svg" alt="logo marvel"/>
        </div>
        <div className="nav-items">
           <Link to= {'/characters'}><span className="btn-dark"> Characters</span></Link> 
           <Link to= {'/comics'}><span className="btn-dark">Comics</span></Link> 
            <span className="btn-ligth"> Favoris</span>

        </div>

    </nav>

    </>
}

export default Navbar