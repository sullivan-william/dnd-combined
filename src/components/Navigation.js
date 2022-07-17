import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { CurrentUser } from "../contexts/CurrentUser";

function Navigation() {

    const navigate = useNavigate()

    const { currentUser, setCurrentUser } = useContext(CurrentUser)

    let navbar = (
        <button style={{ float: 'right' }} onClick={() => navigate('/')}>Login</button>
    )

    // signout function

    const signout = async () => {
        // let response = await fetch('https://cryptic-bayou-09878.herokuapp.com/authentication/signout', {
        let response = await fetch(`http://localhost:3001/authentication/signout`, {
            credentials: 'include'
        })
        let user = await response.json()
        setCurrentUser(user)
        navigate('/')
        window.location.reload()
    }

    if (currentUser) {
        navbar = (
            <h5 style={{ float: 'right' }}>
                {currentUser.username} - <button onClick={signout}>Signout</button>
            </h5>
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