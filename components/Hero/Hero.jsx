import Head from 'next/head'
import { Container, Row, Card, Button } from 'react-bootstrap'
export default function Hero() {
    return (
        <>
  <Container className="md-container">
                <Container className="md-container">
                    <Container className="md-container">
                        <Card className="mml-card text-white">
                            <Card.Body>
                                <Card.Text>
                                    <p className="description ">
                        We are fully invested in the future of our planet and younger generations.<br/>
                        We are exploring greener every friendly solutions. We have started with electric car chargers
                        and are hoping to offer all forms of green energy in the future.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Container>
                </Container>
            </Container>
        </>
    )
}