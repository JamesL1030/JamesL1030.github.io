//import { findByLabelText } from '@testing-library/dom';
import React from 'react'

import CardInfo from '../components/CardInfo'

function Card(props) {

    return(    
        <div j-card>
            <img className="j-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/>
        </div>      
    );
}

export default Card

