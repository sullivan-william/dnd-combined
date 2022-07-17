import { useContext, useState, createContext } from "react";
import { CurrentUser } from "../contexts/CurrentUser";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import '../App.css';

function Login() {

    const navigate = useNavigate()

    const { currentUser, setCurrentUser } = useContext(CurrentUser)

    if (currentUser) {
        navigate('/new_character')
    }

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const [errorMessage, setErrorMessage] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
        // const response = await fetch(`https://cryptic-bayou-09878.herokuapp.com/authentication`, {
        const response = await fetch(`http://localhost:3001/authentication`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })

        const data = await response.json()

        if (response.status === 200) {
            console.log(data)
            await setCurrentUser(data.user)
            await navigate(`/home`)
        } else {
            setErrorMessage(data.message)
        }

    }
    
    return (
        <div className="login">
            <h1>Login</h1>
            {errorMessage !== null
                ? (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )
                : null
            }
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-6 form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            required
                            value={credentials.username}
                            onChange={e => setCredentials({ ...credentials, username: e.target.value })}
                            className="form-control"
                            id="username"
                            name="username"
                        />
                    </div>
                    <div className="col-sm-6 form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            required
                            value={credentials.password}
                            onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                            className="form-control"
                            id="password"
                            name="password"
                        />
                    </div>
                </div>
                <input className="btn btn-primary" type="submit" value="Login" />
            </form>
            <Link className="btn btn-secondary" to="/signup">New User</Link>
        </div>
    )
}

export default Login