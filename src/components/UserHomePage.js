import { useContext } from "react";
import { useNavigate } from "react-router";
import { CurrentUser } from "../contexts/CurrentUser";

function UserHomePage() {

    const { currentUser } = useContext(CurrentUser)

    const navigate = useNavigate()

    function goToCharacters() {
        navigate(`/characters_page/${currentUser.user_id}`)
    }

    function createNew() {
        navigate('/new_character')
    }

    return (
        <div>
            <button className="btn btn-info" onClick={goToCharacters}>Your Characters</button>
            <button className="btn btn-primary" onClick={createNew}>Create New Character</button>
        </div>
    )
}

export default UserHomePage