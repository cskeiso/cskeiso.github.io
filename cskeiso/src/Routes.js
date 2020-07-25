import React from 'react';
import Home from './home/Home';
import Work from './work/Work';
import CastingCouch from './work/Casting_Couch/CastingCouch';
import Muse from './work/Muse/Muse';
import LongLegs from './work/Yea-Shes-Got-Long-Legs-and-Huge-Tits/LongLegs'
import Text from './text/Text';
import Audio from './audio/Audio';
const routes = {
  '/': () => <Home />,
  '/text': () => <Text />,
  '/work': () => <Work />,
  '/work/Casting-Couch': () => <CastingCouch />,
  '/work/Muse': () => <Muse />,
  '/work/Yea-Shes-Got-Long-Legs-and-Huge': () => <LongLegs/>,
  '/audio': () => <Audio />
};
export default routes;