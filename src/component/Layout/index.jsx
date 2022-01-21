import { Outlet } from "react-router-dom"
import NavBar from "../UI/NavBar"

const Layout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default Layout