import { useContext } from "react";
import { useNavigate } from "react-router";
import { CurrentUser } from "../contexts/CurrentUser";

function Navigation() {

    const navigate = useNavigate()

    const { currentUser } = useContext(CurrentUser)
    
    let navbar = (
        <li style={{ float: 'right' }}>
            <a href="#" onClick={() => navigate('/')}>
                Login
            </a>
        </li>
    )
    
    if (currentUser) {
        navbar = (
            <li style={{ float: 'right' }}>
                Logged in as {currentUser.username}
            </li>
        )
    }

    return (
        <nav>
            <ul>
                {navbar}
            </ul>
        </nav>
    )
}

export default Navigation