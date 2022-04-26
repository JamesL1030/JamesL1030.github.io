import React from 'react'

import Hero from '../components/Hero'
import Content from '../components/Content'
import Img1 from '../assets/images/img1.jpg'

function AboutPage(props) {
    return(
        <div>
            <Hero title={props.title} />
            <Content>
                <img style={{'height':"350px"}}  
                    className="aboutImg"  
                    src={Img1} alt="James Lucas"
                />  
                <h2 className="aboutText">James Lucas - Web Developer</h2>
                <p>
                    My name is James. I gained an interest in coding years ago. I taught myself how to code and in 2019 decided to take it to the next level. I enrolled at Full Sail University and am currently in the Web Design and Web Development program with a graduation date of May 2022. 
                </p>
                <p>
                    As I approach my graduation date, I am looking to transition into the world of web development. I am currently looking for work as a freelance web developer. I enjoy building React applications however I have a vast knowledge of other technologies as well.
                </p>
                <p>
                    I'm currently located in Ponte Vedra Beach, Florida. I am a small business owner with most of my work in Ormond Beach. I enjoy spending my free time in nature and working out.
                </p>
            </Content>
        </div>
    );
}

export default AboutPage;