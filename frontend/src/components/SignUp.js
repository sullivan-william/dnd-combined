import { useContext, useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { CurrentUser } from "../contexts/CurrentUser"

function SignUp() {

    
    const navigate = useNavigate()
    
    const { currentUser } = useContext(CurrentUser)

    if (currentUser) {
        navigate('/new_character')
    }

    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    async function handleSubmit(e) {
        e.preventDefault()

        await fetch(`https://customcharactersheetbuilder.herokuapp.com/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        navigate("/")
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <Row className="align-items-center">
                    <Col xs="auto">
                        <Form.Label htmlFor="username">Username</Form.Label>
                        <Form.Control
                            required
                            value={user.username}
                            onChange={e => setUser({ ...user, username: e.target.value })}
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
            				value={user.password}
            				onChange={e => setUser({ ...user, password: e.target.value })}
            				className="mb-2"
            				id="password"
            				name="password"
        				/>
                    </Col>
                </Row>
                <Button style={{background: "#F7567C", border: "2px solid #F7567C"}} type="submit" className="mb-2">
                    Sign Up
                </Button>
            </Form>
            <Link style={{color: "#8F8F8F"}} to="/">Already have an account?</Link>
        </div>
    )
}

export default SignUp