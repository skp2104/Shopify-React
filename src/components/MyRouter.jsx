// Routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router';
import { ClientRouter } from '@shopify/app-bridge-react';
import Products from './Products';

function MyRouter(props) {
  const { history } = props;

  return (
    <>
      <ClientRouter history={history} />
      <Routes>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Products />
        </Route>
      </Routes>
    </>
  );
}

export default MyRouter;
