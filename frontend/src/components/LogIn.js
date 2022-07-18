import { useContext, useState, createContext } from "react";
import { CurrentUser } from "../contexts/CurrentUser";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";

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
        // const response = await fetch(`http://localhost:3001/authentication`, {
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
        <div>
            <h1> Custom Character Sheets </h1>
            <p>Welcome! This website is designed for players of the game Dungeons &amp; Dragons. For those that are complete beginners and experienced adventurers alike. The purpose of this website is so that you and your friends can build your character sheets and keep track of your in game progress together with an easy to follow format. It is currently a work in progress but we hope to be fully functional within the next couple of weeks. As for now feel free to create an account and plan for your future characters by giving them names and choosing their starting race and class.</p>
            <h1>Login</h1>
            {errorMessage !== null
                ? (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )
                : null
            }
            <Form onSubmit={handleSubmit}>
                <Row className="align-items-center">
                    <Col xs="auto">
                        <Form.Label htmlFor="username">Username</Form.Label>
                        <Form.Control
                            required
                            value={credentials.username}
                            onChange={e => setCredentials({ ...credentials, username: e.target.value })}
                            className="mb-2"
                            id="username"
                            name="username"
                        />
                    </Col>
                    <Col xs="auto">
                        <Form.Label htmlFor="password">Password</Form.Label>
                        <Form.Control
                            type="password"
                            required
                            value={credentials.password}
                            onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                            className="mb-2"
                            id="password"
                            name="password"
                        />
                    </Col>
                </Row>
                <Button style={{background: "#F7567C", border: "2px solid #F7567C"}} type="submit" className="mb-2">
                    Login
                </Button>
            </Form>
            <Link className="btn btn-secondary" to="/signup">New User</Link>
        </div>
    )
}

export default Login