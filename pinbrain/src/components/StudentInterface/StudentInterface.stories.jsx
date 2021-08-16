import React from 'react'
import StudentInterface from './StudentInterface'
import FirstGame from '../Badges/FirstGame'
import Spare from '../Badges/Spare'
import Strike from '../Badges/Strike'

const fact1 = "British anthropologists found out that the items you need for bowling go as far back as Egyptian tombs around 3200 BC. The first indoor lane was constructed in New York City in 1840, and people saw a game on their TV for the first time in 1950."
const threeBadges = [<FirstGame />, <Spare />, <Strike />]

const data = {
    username: 'TimmyBowler163',
    quote: fact1,
    badges: threeBadges
}

export default {
    title: 'Components/StudentInterface',
    component: StudentInterface,
  };
  
  export const StudentInterface1 = () => <StudentInterface data={data}/>