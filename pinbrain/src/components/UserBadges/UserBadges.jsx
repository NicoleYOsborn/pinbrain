import React from 'react';
import './userBadges.css'



function UserBadges(props) {
    return (
        <div>
            <h2>My Badges</h2>
            <div className="userBadges">
                {props.badges.map((badge, index)=>{
                    return <div key={index}>
                                {badge}
                            </div>
                })}
            </div>
        </div>
    )
};

export default UserBadges;