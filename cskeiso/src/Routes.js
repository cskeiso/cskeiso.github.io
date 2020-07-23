import React from 'react';
import Home from './Home';
import Text from './text/Text';
const routes = {
  '/': () => <Home />,
  '/text': () => <Text />
};
export default routes;