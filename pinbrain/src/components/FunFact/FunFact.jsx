import React from 'react'
import './funFact.css'

function FunFact(props) {

    return (
        <div className="funFactContainer">
            <p className="factLabel">Did you know?</p>
            <p>{props.quote}</p>
        </div>
    )
}

export default FunFact;