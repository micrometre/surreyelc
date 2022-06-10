import Image from 'next/image';
import { Container, Row, Card, Button } from 'react-bootstrap'

export function CommercialHero() {
  return (
    <>
      <Container className="md-container">
        <Row className="justify-content-md-between">
          <Card className="lml-card text-white">
            <Card.Body>
              <Card.Text>
                <p className="description ">
                  Maintenance contracts
                  all electrical installations.
                  Consumer unit distribution board units.
                </p>
              </Card.Text>
              <Image
                src="/images/9.webp"
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
                  Periodic test + inspections
                  Emergency lighting test.
                  Out of hours work for customer convenience.
                </p>
              </Card.Text>
              <Image
                src="/images/9.webp"
                alt="About picture"
                width={500}
                height={300}
              />
            </Card.Body>
          </Card>



        </Row>
      </Container>
    </>
  );
}




export default CommercialHero;