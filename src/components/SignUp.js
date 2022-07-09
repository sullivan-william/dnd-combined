import { useState } from "react"
import { useNavigate } from "react-router"

function SignUp() {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    async function handleSubmit(e) {
        e.preventDefault()

        await fetch(`http://localhost:3001/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        navigate("/new_character")
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-6 form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            required
                            value={user.username}
                            onChange={e => setUser({ ...user, username: e.target.value })}
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
            				value={user.password}
            				onChange={e => setUser({ ...user, password: e.target.value })}
            				className="form-control"
            				id="password"
            				name="password"
        				/>
    				</div>
                </div>
                <input className="btn btn-primary" type="submit" value="Sign Up" />
            </form>
        </div>
    )
}

export default SignUp