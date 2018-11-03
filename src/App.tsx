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
  background: rgba(0,0,0,0.25);
`;

const MenuLink = styled(Link)`
  text-decoration: none;
`

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
                <MenuLink smooth={true} to="/#about">
                  <Button theme="text-primary-on-dark">About</Button>
                </MenuLink>
                <MenuLink smooth={true} to="/#vision">
                  <Button theme="text-primary-on-dark">Vision</Button>
                </MenuLink>
                <MenuLink smooth={true} to="/#product">
                  <Button theme="text-primary-on-dark">Product</Button>
                </MenuLink>
                <MenuLink smooth={true} to="/#contact">
                  <Button theme="text-primary-on-dark">Contact</Button>
                </MenuLink>
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
