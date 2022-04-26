import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'


function Hero(props) {
    return(
        <div className="container-fluid bg-transparent p-0 ">
           <Container className="myHero" fluid={true}>
               <Row className="justify-content-center py-5">
                   <Col md={8} sm={12}>
                        { props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1> }
                        <span className="cRed">{ props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3> }</span>
                        { props.text && <h3 className="lead font-weight-light">{props.text}</h3> }
                   </Col>
               </Row>
           </Container>
        </div>
    );
}

export default Hero;