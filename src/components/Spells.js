import { useEffect, useState } from "react";

function Spells() {
    const [spellsData, setSpellsData] = useState([])

    // retrieve spells list from API
    useEffect(() => {
        const API_URL = `http://localhost:3001/spells/`
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
            <p key={i}>{spell.name}</p>
        )
    })

    return (
        <div>
            {spells}
        </div>
    )
}

export default Spells