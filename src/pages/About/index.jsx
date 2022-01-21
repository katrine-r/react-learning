import { useLocation, useNavigate } from 'react-router-dom'


const About = () => {
    const navigate = useNavigate()
    const location = useLocation()
    console.log('location', location.state.num);
    return (
        <>
            <h1>About Page</h1>
            <button onClick={() => navigate('/')}>На главную</button>
        </>
    )
}

export default About