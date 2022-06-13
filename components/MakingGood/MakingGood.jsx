import Image from 'next/image'
import { Container, Row, Card, Button } from 'react-bootstrap'
export default function MakingGood() {
    return (
        <>
            <Container className="md-container mt-5">
                <Card className="mml-card text-white">
                    <Card.Body>
                        <Card.Text>
                            <p className="description ">
                                Making good walls damaged by chasing or drilling.
                                <br/>
                                <br/>
                                Fully re-plaster walls if required by client.<br/>
                                <br/>
                                Painting and wallpapering to any specification<br/>
                                <br/>
                                Deep cleans at end of job to leave project in a complete state.<br/>
                                <br/>
                                Boat Access for hard to reach river properties.<br/>
                                <br/>
                                Our work can be conducted in out of hours work to keep disruption to your business to aminimum.

                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}