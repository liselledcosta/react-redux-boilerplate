import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import MainLayout from './components/layouts/MainLayout'
import DashboardComponent from './components/dashboard/DashboardComponent'
import UsersComponent from './components/users/UsersComponent'

const routes = (
    <Route path="/">
      <IndexRedirect to="/users" />
      <Route component={MainLayout}>
        <Route path="/dashboard" component={DashboardComponent}/>
        <Route path="/users" component={UsersComponent}/>
      </Route>
  </Route>
  );

export default routes;
