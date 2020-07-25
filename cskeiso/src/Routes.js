import React from 'react';
import Home from './home/Home';
import Work from './work/Work';
import CastingCouch from './work/Casting_Couch/CastingCouch'
import Text from './text/Text';
import Audio from './audio/Audio';
const routes = {
  '/': () => <Home />,
  '/text': () => <Text />,
  '/work': () => <Work />,
  '/work/Casting-Couch': () => <CastingCouch />,
  '/audio': () => <Audio />
};
export default routes;