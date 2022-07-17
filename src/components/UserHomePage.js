import { useContext } from "react";
import { Button, ButtonGroup, Card, CardGroup } from "react-bootstrap";
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
        <div className="d-flex justify-content-around">
            <CardGroup>
                <Card style={{margin: "3em"}}>
                    <Card.Img variant="top" src="./characters.jpeg" alt="heroes standing in front of dragon" />
                    <Card.Body>
                        <Card.Title>Characters</Card.Title>
                        <Card.Text style={{color: "#0F0A0A"}}>
                            This is the home base where all of your characters reside. Manage exisiting characters here or start a new build and save it to your collection.
                        </Card.Text>
                        <ButtonGroup>
                            <Button style={{color: "#0F0A0A", background: "#9CFFFA", border: "2px solid #85FFF9"}} onClick={goToCharacters}>Your Characters</Button>
                            <Button style={{background: "#8F8F8F", border: "2px solid #7A7A7A"}} onClick={createNew}>Create New Character</Button>
                        </ButtonGroup>
                    </Card.Body>
                </Card>
                <Card style={{margin: "3em"}}>
                    <Card.Img variant="top" src="./player-equipment.jpeg" alt="assortment of gear" />
                    <Card.Body>
                        <Card.Title>Equipment</Card.Title>
                        <Card.Text style={{ color: "#0F0A0A" }}>
                            Got some extra coin in your pockets? Take a look at some valuable equipment your character might find along their journey and add it to their inventory. Can't find what you're looking for? Build your own items with custom stats!
                        </Card.Text>
                        <Button style={{ color: "#0F0A0A", background: "#8F8F8F", border: "2px solid #7A7A7A"}}>COMING SOON</Button>
                    </Card.Body>
                </Card>
                <Card style={{margin: "3em"}}>
                    <Card.Img variant="top" src="./spells.webp" alt="wizard summoning lightning" />
                    <Card.Body>
                        <Card.Title>Spells</Card.Title>
                        <Card.Text style={{ color: "#0F0A0A" }}>
                            Looking to learn some powerful new spells or just preparing yourself for what you might be up against when facing powerful mages? Take a look at the comprehensive spell book for D&amp;D.
                        </Card.Text>
                        <Button style={{ color: "#0F0A0A", background: "#8F8F8F", border: "2px solid #7A7A7A"}}>COMING SOON</Button>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}

export default UserHomePage