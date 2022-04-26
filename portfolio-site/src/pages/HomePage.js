import React from 'react'
import BootstrapCarousel from '../components/BootstrapCarousel' 
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'

function HomePage(props) {
    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
            <BootstrapCarousel />
            <Carousel />
        </div>
        
    );
}

export default HomePage;