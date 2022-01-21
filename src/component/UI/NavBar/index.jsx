import { NavLink } from 'react-router-dom'
import './styles.css'

const NavBar = () => {
    return (
        <div className='navBar'>
            <nav>
                <NavLink to='/'>Главная</NavLink>
                <NavLink to='/about' state={{num: 1}}>Про нас</NavLink>
            </nav>
        </div>
    )
}

export default NavBar