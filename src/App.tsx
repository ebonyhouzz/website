import { Button } from '@rmwc/button';
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle
} from '@rmwc/top-app-bar';
import { Typography } from '@rmwc/typography';

import * as React from 'react';
import styled from 'styled-components';
import Home from './home/Home.component';
import logo from './logo-light.svg';
import { device } from './utils/devices';

const TransparentTopAppBar = styled(TopAppBar)`
  background: transparent;
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

class App extends React.Component {
  // private visionRef: React.RefObject<{}>;
  // private productRef: React.RefObject<{}>;
  // private contactRef: React.RefObject<{}>;

  // constructor(props: React.Props<{}>) {
  //   super(props);
  //   this.visionRef = React.createRef();
  //   this.productRef = React.createRef();
  //   this.contactRef = React.createRef();
  // }

  public render() {
    return (
      <React.Fragment>
        <TransparentTopAppBar>
          <TopAppBarRow>
            <TopAppBarSection alignStart={true}>
              <TopAppBarTitle>
                <img src={logo} alt="logo" height="48" />
              </TopAppBarTitle>
            </TopAppBarSection>
            <MenuSection alignEnd={true}>
              <Button theme="text-primary-on-dark">About</Button>
              <Button theme="text-primary-on-dark">Vision</Button>
              <Button theme="text-primary-on-dark">Product</Button>
              <Button theme="text-primary-on-dark">Contact</Button>
            </MenuSection>
          </TopAppBarRow>
        </TransparentTopAppBar>
        {/* <Home
          visionRef={this.visionRef}
          productRef={this.productRef}
          contactRef={this.contactRef}
        /> */}
        <Home />
        <Footer>
          <Typography use="caption" theme="on-primary">
            © 2017 EBONY DÖRR. ALL RIGHTS RESERVED.
          </Typography>
        </Footer>
      </React.Fragment>
    );
  }
}

export default App;
