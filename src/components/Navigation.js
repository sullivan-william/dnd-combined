import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { CurrentUser } from "../contexts/CurrentUser";

function Navigation() {

    const navigate = useNavigate()

    const { currentUser, setCurrentUser } = useContext(CurrentUser)

    let navbar = (
        <li style={{ float: 'right' }}>
            <a href="#" onClick={() => navigate('/')}>
                Login
            </a>
        </li>
    )

    // signout function

    const signout = async () => {
        let response = await fetch('http://localhost:3001/authentication/signout', {
            credentials: 'include'
        })
        let user = await response.json()
        setCurrentUser(user)
        navigate('/')
    }

    if (currentUser) {
        navbar = (
            <li style={{ float: 'right' }}>
                {currentUser.username} - <button onClick={signout}>Signout</button>
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