import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';

import Home from './components/Home';
import List from './containers/List';
import Form from './containers/Form';
import bg from '../public/images/background.png'

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
      <Header title="Once bitten, Twice shy" style={{ height: '56px'}} />
      <Drawer title="Once bitten, Twice shy">
        <Navigation>
          <Link to="/list">ดูข้อมูลทั้งหมด</Link>
          <Link to="/add">เพิ่มข้อมูล</Link>
        </Navigation>
      </Drawer>
      <Content style={{backgroundImage: 'url(' + bg + ')'}}>
        <RouteHideDrawer exact path="/" component={ Home } />
        <RouteHideDrawer path="/list" component={ List } />
        <RouteHideDrawer path="/add" component={ Form } />
      </Content>
    </Layout>
  </Router>
);
