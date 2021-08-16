import React from 'react';
import SpareBadge from '../../images/spare-Badge.svg'
import './badge.css'

function Spare() {
    return (
        <img className="badge" src={SpareBadge} alt="Spare badge"/>
    )
}

export default Spare;