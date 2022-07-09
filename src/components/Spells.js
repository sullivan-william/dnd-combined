import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Spells() {
    const { id } = useParams()
    const [spellData, setSpellData] = useState({})

    // retrieve spell info from API
    useEffect(() => {
        const API_URL = `http://localhost:3001/spells/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setSpellData(resData)
        }
        fetchData()
    }, [id])

    return (
        <div>
            <h1>{spellData.name}</h1>
            <p>{spellData.desc}</p>
            <p>At higher leves: {spellData.higher_level}</p>
            <p></p>
        </div>
    )
}

export default Spells