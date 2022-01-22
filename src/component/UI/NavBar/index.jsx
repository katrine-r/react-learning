import { NavLink, useNavigate } from 'react-router-dom'
import './styles.css'
import { useContext } from "react";
import { AuthContext } from "../../../context";

const NavBar = () => {

    const { isAuth, setIsAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleClick = () => {
        setIsAuth(false);
        navigate("/signin");
        localStorage.removeItem("isAuth");
    };

    return (
        <div className='navBar'>
            <nav>
                <NavLink to='/'>Главная</NavLink>
                <NavLink to='/about' state={{num: 1}}>Про нас</NavLink>
            </nav>
            <span onClick={handleClick}>Sign out</span>
        </div>
    )
}

export default NavBar