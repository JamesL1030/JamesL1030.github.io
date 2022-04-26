import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FB from '../assets/images/facebook.png'
import Linkedin from '../assets/images/linkedin.png'

function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        James Lucas
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/james.lucas.5/">
                            <img style={{'height':"3em"}}  
                                className="myIcons"  
                                src={FB} alt="Facebook"
                            /> 
                        </a>

                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/james-lucas-4b4019126/">
                            <img style={{'height':"3em"}}  
                                className="myIcons"  
                                src={Linkedin} alt="Linkedin"
                            /> 
                        </a>          
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;


