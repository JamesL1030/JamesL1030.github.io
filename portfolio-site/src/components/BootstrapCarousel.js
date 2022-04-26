import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel' 
import img4 from '../assets/images/img4.png'
import img5 from '../assets/images/img5.png'

export class BootstrapCarousel extends Component {  
    render() {  
  
        return (  
            <div style={{ width: "375px", margin: "auto" }}>  
                <div class='container-fluid' >  
                    <div className="row title" style={{ marginBottom: "20px" }} >  
                        <div className="col-sm-12 carouselTitle">  
                            My Projects  
                        </div>  
                    </div>  
                </div>  
                <div className='container-fluid' >  
                    <Carousel>  
                        <Carousel.Item style={{'height':"450px"}} >  
                            <img style={{'height':"450px"}}  
                                className="d-block w-100"  
                                src={img4} alt="img4"
                            />  
                            <Carousel.Caption>  
                                <h3>Movie Details</h3>  
                            </Carousel.Caption>  
                        </Carousel.Item  >  
                        <Carousel.Item style={{'height':"450px"}}>  
                            <img style={{'height':"450px"}}  
                                className="d-block w-100"  
                                src={img5} alt="img5"
                            />  
                            <Carousel.Caption>  
                                <h3>MyFit</h3>  
                            </Carousel.Caption>  
                        </Carousel.Item>        
                    </Carousel>  
                </div>  
            </div>  
        )  
    }  
}  
  
export default BootstrapCarousel  

