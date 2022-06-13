import Image from 'next/image';
import { Container, Row, Card, Button } from 'react-bootstrap'

export function Contact() {
  return (
    <>
      <Container className="md-container"  style={{ textDecoration: 'none' }}>
        <Row className="justify-content-md-between">
          <Card className="lml-card text-white">
            <Card.Body>
              <Image
                src="/images/logo.webp"
                alt="The surreyelc"
                width={640}
                height={248}
                priority
              />
              <Card.Text>
                <p className="description ">
                  The easiest way to contact us is by giving us a call to arrange a viewing of the work and a no-obligation quote.<br />
                  Alternatively, you can email us at <code>info@elmbridgepainting </code>Please provide your name and telephone contact details in the email so we can get back to you at the very earliest opportunity.
                  We are also on Facebook and Instagram.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="lml-card text-white">
            <Card.Body >
              <Image
                src="/images/map.webp"
                alt="The surreyelc"
                width={640}
                height={248}
                priority
              />
              <Card.Text>
                <p className="description ">
                  Business Hours
                  <br />
                  Monday-Friday from 07:30am - 7pm
                  <br />
                  Saturday-Sunday from 07:30am - 7pm
                </p>
                <p className="description ">
                  <a href="tel: 07849 721448" title='Call Electrical Surrey'>
                    07849 721448 <span><code>Mobile</code></span>
                  </a>
                  <br />
                  <a href="tel: 07849 721448" title='Call Electrical Surrey'>
                  07849 721460 <span><code>Mobile</code></span>
                  </a>
                  <br />
                  <a href="tel: 07849 721448" title='Call Electrical Surrey'>
                  01932 886593 <span><code>Office</code></span>
                  </a>
                </p>

              </Card.Text>
            </Card.Body>
          </Card>



        </Row>
      </Container>
    </>
  );
}




export default Contact;