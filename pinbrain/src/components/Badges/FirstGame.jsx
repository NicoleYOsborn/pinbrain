import React from 'react';
import firstGameBadge from '../../images/1stGameBadge.svg'
import './badge.css'

function FirstGame() {
    return (
        <img className="badge" src={firstGameBadge} alt="First Game badge"/>
    )
}

export default FirstGame;