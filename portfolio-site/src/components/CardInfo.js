import React from 'react'

function CardInfo(props) {

    

    return(
        <div>
            <p>{props.title}</p>
            <p>{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>
        </div>
    );
}

export default CardInfo

/*
import React from 'react'
import { useSpring, animated } from 'react-spring'

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <div className="j-card-info" style={style}>
            <p classNames="j-card-sub-title">{props.title}</p>
            <p classNames="j-card-title">{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>
        </div>
    );
}

export default CardInfo*/