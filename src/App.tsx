import { Button } from '@rmwc/button';
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle
} from '@rmwc/top-app-bar';
import { Typography } from '@rmwc/typography';

import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import Home from './home/Home.component';
import logo from './logo-light.svg';
import { device } from './utils/devices';

const TransparentTopAppBar = styled(TopAppBar)`
  background: rgba(0, 0, 0, 0.25);
`;

const MenuLink = styled(Link)`
  text-decoration: none;
`;

const MenuSection = styled(TopAppBarSection)`
  display: none;
  @media ${device.mobileL} {
    display: flex;
  }
`;

const Footer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
  background-color: #2e3f57;
`;

const MenuButton = ({ to, title }: { to: string; title: string }) => (
  <MenuLink smooth={true} to={to}>
    <Button theme="text-primary-on-dark">{title}</Button>
  </MenuLink>
);

class App extends React.Component {
  public render() {
    return (
      <Router>
        <>
          <TransparentTopAppBar>
            <TopAppBarRow>
              <TopAppBarSection alignStart={true}>
                <TopAppBarTitle>
                  <img src={logo} alt="logo" height="48" />
                </TopAppBarTitle>
              </TopAppBarSection>
              <MenuSection alignEnd={true}>
                <MenuButton to="/#about" title="About" />
                <MenuButton to="/#vision" title="Vision" />
                <MenuButton to="/#product" title="Product" />
                <MenuButton to="/#contact" title="Contact" />
              </MenuSection>
            </TopAppBarRow>
          </TransparentTopAppBar>
          <Home />
          <Footer>
            <Typography use="caption" theme="on-primary">
              © 2017 EBONY DÖRR. ALL RIGHTS RESERVED.
            </Typography>
          </Footer>
        </>
      </Router>
    );
  }
}

export default App;
