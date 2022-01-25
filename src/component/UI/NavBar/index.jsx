import { NavLink, useNavigate } from 'react-router-dom'
import './styles.css'
import { useContext } from "react";
import { AuthContext } from "../../../context";
import { useDispatch, useSelector } from 'react-redux';
import { changeTest } from '../../../store/actions/test';

const NavBar = () => {
    const dispatch = useDispatch()

    const { isAuth, setIsAuth } = useContext(AuthContext);
    const { test } = useSelector(state => state.test)
    
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
                <NavLink to='/counter' >Счетчик</NavLink>
                <NavLink to='/weather' >Погода</NavLink>
            </nav>
            <span onClick={() => dispatch(changeTest('clicked'))} >{test}</span>
            <span onClick={handleClick}>Sign out</span>
        </div>
    )
}

export default NavBar