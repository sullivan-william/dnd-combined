import { useContext, useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Character } from "../contexts/Character";

function Classes() {

    const { character, setCharacter } = useContext(Character)

    const [classData, setClassData] = useState([])

    // retrieve possible character classes from API
    useEffect(() => {
        const API_URL = `http://localhost:3001/classes`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setClassData(resData.results)
        }
        fetchData()
    }, [])

    // iterate through classes to return each item individually
    const classes = classData.map((singleClass, i) => {
        return (
            <option value={singleClass.name} key={i}>{singleClass.name}</option>
        )
    })

    return (
        <div>
            <label htmlFor="class">
                Choose Your Class:
                <br></br>
                <select 
                    required
                    value={character.class}
                    onChange={e => setCharacter({ ...character, class: e.target.value})}
                    id="class"
                    name="class"
                >
                    {classes}
                </select>
            </label>
        </div>
    )
}

export default Classes