import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { CurrentUser } from "../contexts/CurrentUser";

function Navigation() {

    const navigate = useNavigate()

    const { currentUser, setCurrentUser } = useContext(CurrentUser)

    let navbar = (
        <h2 style={{ float: 'right' }}>Welcome to the world of D&amp;D!</h2>
    )

    // signout function

    const signout = async () => {
        navigate('/')
        window.location.reload()
        let response = await fetch(`https://customcharactersheetbuilder.herokuapp.com/authentication/signout`, {
            credentials: 'include'
        })
        let user = await response.json()
        setCurrentUser(user)
    }

    if (currentUser) {
        navbar = (
            <h5 style={{ float: 'right' }}>
                {currentUser.username} - <button onClick={signout}>Signout</button>
            </h5>
        )
    }

    return (
        <nav className="nav">
            <ul>
                {navbar}
            </ul>
        </nav>
    )
}

export default Navigation