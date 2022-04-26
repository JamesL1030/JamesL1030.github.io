import React from 'react'



function Carousel() {

    return(
 

        <p>
            
        </p>
       
    );
}

export default Carousel






























/*import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Card from '../components/Card'
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'




class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Title 1',
                    subTitle: 'SubTitle 1',
                    imgSrc: img1,
                    link: 'https://google.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Capstone Project',
                    subTitle: 'Qiuzzes App',
                    imgSrc: img3,
                    link: 'https://google.com',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Title 3',
                    subTitle: 'SubTitle 3',
                    imgSrc: img2,
                    link: 'https://google.com',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            } 
        });

        this.setState({
            items
        });
    }

    makeItems= (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        });
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="card-center">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel;



*/