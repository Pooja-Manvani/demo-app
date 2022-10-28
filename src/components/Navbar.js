import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom"


export const Navbar = () => {
    const params = useParams();
    console.log(params);
    return (
        <nav style={{padding:10,backgroundColor:'lightcyan'}}>
            <NavLink to='contactsList' style={{padding:10}}>Home</NavLink>
            <NavLink to='/register' style={{padding:10}}>Register</NavLink>

            <h2>{window.location.params}</h2>
        </nav>
    )
}