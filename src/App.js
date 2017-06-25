import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';

import List from './containers/List';
import Form from './containers/Form';

const RouteHideDrawer = ({ component: Component, ...rest }) => (
  <Route {...rest} render={() => {
    if (document.querySelector('.mdl-layout__drawer')) {
      document.querySelector('.mdl-layout__obfuscator').classList.remove('is-visible');
      document.querySelector('.mdl-layout__drawer').classList.remove('is-visible');
    }
    return <Component/>
  }}/>
)

export default () => (
  <Router>
    <Layout fixedHeader>
      <Header title="LeafBox"/>
      <Drawer title="LeafBox">
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/add">Add</Link>
        </Navigation>
      </Drawer>
      <Content>
        <RouteHideDrawer exact path="/" component={ List } />
        <RouteHideDrawer path="/add" component={ Form } />
      </Content>
    </Layout>
  </Router>
);
