import { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";

function Spells() {
    const [spellsData, setSpellsData] = useState([])

    // retrieve spells list from API
    useEffect(() => {
        // const API_URL = `http://localhost:3001/spells/`
        const API_URL = `http://localhost:3001/spells`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setSpellsData(resData.results)
        }
        fetchData()
    }, [])

    
    // iterate through list of spells retrieved from api
    const spells = spellsData.map((spell, i) => {
        return (
            <Dropdown.Item key={i}>{spell.name}</Dropdown.Item>
        )
    })

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Spells
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {spells}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Spells