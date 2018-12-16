import { Grid, GridCell } from '@rmwc/grid';
import { Typography } from '@rmwc/typography';

import * as React from 'react';
import styled from 'styled-components';
// import { device } from '../../utils/devices';

const ContactContainer = styled('div')`
  background-color: #374e6b;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContactContent = styled('div')`
  margin-bottom: 16px;
  max-width: 600px;
`;

const ContactGrid = styled(Grid)`
  padding: 0;
`;

const ContactCell = styled(GridCell)`
  padding: 8px;
`;

const AddressTitle = styled(Typography)`
  margin: 0;
`;

const AddressText = styled(Typography)`
  margin: 0;
  max-width: 320px;
`;

const LinkText = styled('a')`
  text-decoration: none;
  display: block;
  color: var(--mdc-theme-secondary, #018786)
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
          <ContactGrid>
            <ContactCell phone={4} tablet={4} desktop={6}>
              <AddressTitle use="headline6" theme="on-primary" tag="h2">
                Factory & Showroom:
              </AddressTitle>
              <AddressText use="body1" theme="on-primary" tag="p">
                Lot 2188, Industrial Estate Selangor Taming Jaya, Jalan Taming
                2, Taming Jaya Industry Park, 43300 Balakong, Selangor Darul
                Ehsan, Malaysia.
              </AddressText>
            </ContactCell>

            <ContactCell phone={4} tablet={4} desktop={6}>
              <AddressTitle use="headline6" theme="on-primary" tag="h2">
                Email:
              </AddressTitle>
              <LinkText href="mailto:inquiry@ebonyhouzz.com">
                inquiry@ebonyhouzz.com
              </LinkText>
              <AddressTitle use="headline6" theme="on-primary" tag="h2">
                Call Us:
              </AddressTitle>
              <LinkText href="tel:603-8961-2579">+603 8961 2579</LinkText>
              <LinkText href="tel:6016-660-5511">+6016 660 5511</LinkText>
              <LinkText href="tel:6017-806-2228">+6017 806 2228</LinkText>
            </ContactCell>
          </ContactGrid>
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
