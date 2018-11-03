import { Grid, GridCell } from '@rmwc/grid';
import { Typography } from '@rmwc/typography';

import * as React from 'react';
import styled from 'styled-components';
import { device } from '../../utils/devices';

const ContactContainer = styled('div')`
  background-color: #374e6b;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContactContent = styled('div')`
  width: 100%;
  @media ${device.mobileL} {
    width: 70%;
  }
`;

const AddressText = styled(Typography)`
  margin: 0;
  max-width: 320px;
`;

const ContactHeader = styled.div`
  margin: 24px;
`

const ContactText = styled(Typography)`
  margin: 0;
`;

const Map = styled('iframe')`
  max-width: 100%;
`;

class ContactComponent extends React.Component {
  public render() {
    return (
      <ContactContainer id="contact">
        <Typography use="headline4" theme="on-primary" tag="h2">
          Contact Us
        </Typography>

        <ContactContent>
          <ContactHeader>
            <ContactText use="headline6" theme="secondary" tag="h2">
              BENSON LIM
            </ContactText>
            <a href="tel:601-6660-5511">
              <ContactText use="subtitle1" theme="secondary" tag="p">
                +601 6660 5511
              </ContactText>
            </a>
          </ContactHeader>
          <Grid>
            <GridCell span={12}>
              <Typography use="headline6" theme="on-primary" tag="h2">
                Ebony Houzz Sdn Bhd
              </Typography>
            </GridCell>
            <GridCell span={2}>
              <ContactText use="body1" theme="on-primary" tag="p">
                Factory:
              </ContactText>
            </GridCell>
            <GridCell span={10}>
              <AddressText use="body1" theme="on-primary" tag="p">
                Lot 2188, Industrial Estate Selangor Taming Jaya, Jalan Taming
                2, Taming Jaya Industry Park, 43300 Seri Kembangan, Selangor
              </AddressText>
            </GridCell>
            <GridCell span={2}>
              <ContactText use="body1" theme="on-primary" tag="p">
                Email:
              </ContactText>
            </GridCell>
            <GridCell span={10}>
              <a href="mailto:inquiry@ebonyhouzz.com">
                <ContactText use="body1" theme="secondary" tag="p">
                  inquiry@ebonyhouzz.com
                </ContactText>
              </a>
            </GridCell>
            <GridCell span={2}>
              <ContactText use="body1" theme="on-primary" tag="p">
                Call Us:
              </ContactText>
            </GridCell>
            <GridCell span={10}>
              <a href="tel:603-8961-2579">
                <ContactText use="body1" theme="on-primary" tag="p">
                  +603 8961 2579
                </ContactText>
              </a>
            </GridCell>
            <GridCell span={2} />
            <GridCell span={10}>
              <a href="tel:6016-660-5511">
                <ContactText use="body1" theme="on-primary" tag="p">
                  +6016 660 5511
                </ContactText>
              </a>
            </GridCell>
            <GridCell span={2} />
            <GridCell span={10}>
              <a href="tel:6017-806-2228">
                <ContactText use="body1" theme="on-primary" tag="p">
                  +6017 806 2228
                </ContactText>
              </a>
            </GridCell>
          </Grid>
        </ContactContent>

        <Map
          width="600"
          height="450"
          src="https://www.google.com/maps/embed/v1/place?q=Lot%202188%2C%20Industrial%20Estate%20Selangor%20Taming%20Jaya%2C%20Jalan%20Taming%202%2C%20Taming%20Jaya%20Industry%20Park%2C%2043300%20Seri%20Kembangan%2C%20Selangor&key=AIzaSyDWfsxrQi1Mycs_PD2uIUrQvlIuu9HOV2s"
        />
      </ContactContainer>
    );
  }
}

export default ContactComponent;
