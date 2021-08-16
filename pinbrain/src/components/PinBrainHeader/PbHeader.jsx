import React from 'react';
import PbBrain from '../PbBrain/PbBrain'
import './pbHeader.css'

function PbHeader() {
    return (
        <div className="pbHeader">
            <PbBrain />
            <h1>PinBrain</h1>
        </div>
    )
}

export default PbHeader;