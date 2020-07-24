import React from 'react';
import Home from './home/Home';
import Work from './work/Work';
import Text from './text/Text';
import Audio from './audio/Audio';
const routes = {
  '/': () => <Home />,
  '/text': () => <Text />,
  '/work': () => <Work />,
  '/audio': () => <Audio />
};
export default routes;