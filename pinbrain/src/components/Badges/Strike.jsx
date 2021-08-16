import React from 'react';
import StrikeBadge from '../../images/XBadge.svg'
import './badge.css'

function Strike() {
    return (
        <img className="badge" src={StrikeBadge} alt="Strike badge"/>
    )
}

export default Strike;