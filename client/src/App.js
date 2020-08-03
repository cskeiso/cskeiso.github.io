import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './Routes';
import NotFoundPage from './NotFoundPage';

function App() {
  const routeResult = useRoutes(routes);
  return routeResult || <NotFoundPage />;
}

export default App;