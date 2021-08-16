import React from 'react'
import FirstGame from '../Badges/FirstGame';
import Spare from '../Badges/Spare';
import Strike from '../Badges/Strike';
import UserBadges from './UserBadges';

const oneBadge = [<FirstGame />]
const twoBadges = [<FirstGame />, <Spare />]
const threeBadges = [<FirstGame />, <Spare />, <Strike />]

export default {
    title: 'Components/UserBadges',
    component: UserBadges,
  };
  
  export const FirstGameOnly = () => <UserBadges badges={oneBadge}/>
  export const FirstGameSpare = () => <UserBadges badges={twoBadges}/>
  export const FirstGameSpareStrike = () => <UserBadges badges={threeBadges}/>

