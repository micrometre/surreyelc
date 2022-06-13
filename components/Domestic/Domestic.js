import Image from 'next/image'
import { Container, Row, Card, Button } from 'react-bootstrap'
export default function Domestic() {
    return (
        <>
            <Container className="md-container">
                <Row className="justify-content-md-between">
                    <Card className="lml-card text-white">
                        <Card.Body>
                            <Card.Text>
                                <p className="description ">
                                    Full domestic rewires
                                    Consumer unit chargers
                                    Periodic test and inspections
                                    Full remedials
                                    Lighting installations of all types
                                    Access to river properties
                                </p>
                            </Card.Text>
                            <Image
                                src="/images/river.webp"
                                alt="About picture"
                                width={500}
                                height={300}
                            />
                        </Card.Body>
                    </Card>

                    <Card className="lml-card text-white">
                        <Card.Body>
                            <Card.Text>
                                <p className="description ">
                                    External electrical installations to
                                    Garden sheds, Out houses, Garden lighting, Driveway lighting, Decking areas and External living Areas
                                </p>
                            </Card.Text>
                            <Image
                                src="/images/36.webp"
                                alt="About picture"
                                width={500}
                                height={300}
                            />
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    )
}