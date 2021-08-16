import React from 'react';
import './studentInterface.css'
import PbHeader from '../PinBrainHeader/PbHeader'
import ScoreCard from '../ScoreCard/ScoreCard'
import UserBadges from '../UserBadges/UserBadges'
import TotalScore from '../TotalScore/TotalScore'
import FunFact from '../FunFact/FunFact'


function StudentInterface(props) {

    return (
        <div className="interfaceContainer">
            <PbHeader />

            <ScoreCard username={props.data.username}/>

            <div className="middleSection">
                <UserBadges badges={props.data.badges}/>
                <TotalScore />
            </div>

            <FunFact quote={props.data.quote}/>
        </div>
    )
};

export default StudentInterface;