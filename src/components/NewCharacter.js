import { useState } from "react"
import { useNavigate } from "react-router"
import Classes from "./Classes"
import Races from "./Races"

function NewCharacter() {

    const navigate = useNavigate()

    const [character, setCharacter] = useState({
        name: '',
        race: '',
        class: ''
    })

    async function handleSubmit(e) {
        e.preventDefault()

        await fetch(`http://localhost:3001/characters/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(character)
        })
        navigate("/characters_page")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="col-sm-6 form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        required
                        value={character.name}
                        onChange={e => setCharacter({ ...character, name: e.target.value})}
                        className="form-control"
                        id="name"
                        name="name"
                    />
                </div>
                <Races />
                <div>
                    <label htmlFor="class">{<Classes />}</label>
                </div>
                <input className="btn btn-primary" type="submit" value="Create Character" />
            </form>
        </div>
    )
}

export default NewCharacter 