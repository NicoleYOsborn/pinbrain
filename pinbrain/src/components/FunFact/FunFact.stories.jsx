import React from 'react';

import FunFact from './FunFact';

const fact1 = "British anthropologists found out that the items you need for bowling go as far back as Egyptian tombs around 3200 BC. The first indoor lane was constructed in New York City in 1840, and people saw a game on their TV for the first time in 1950."
const fact2 = "The heaviest legal weight for a custom bowling ball is approximately 16 pounds, but it can be as heavy as 23 pounds. Many people question whether playing with 18–23-pound bowling balls should be legal or not."
export default {
  title: 'Components/FunFact',
  component: FunFact,
};

export const Fact1 = () => <FunFact quote={fact1} />
export const Fact2 = () => <FunFact quote={fact2} />