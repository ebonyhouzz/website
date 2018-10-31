import { Grid, GridCell } from '@rmwc/grid';
import { Typography } from '@rmwc/typography';

import * as React from 'react';
import styled from 'styled-components';

const ContactContainer = styled('div')`
  background-color: #374e6b;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContactText = styled(Typography)`
  margin: 0;
`;

const Map = styled('iframe')`
  max-width: 100%;
`;

class ContactComponent extends React.Component {
  public render() {
    return (
      <ContactContainer>
        <Typography use="headline4" theme="on-primary" tag="h2">
          Contact Us
        </Typography>
        <div>
          <Typography use="subtitle2" theme="on-primary" tag="p">
            Desa KL Enterprise Sdn Bhd
          </Typography>
          <Typography use="body1" theme="on-primary" tag="p">
            Lot 2188, Industrial Estate Selangor Taming Jaya, Jalan Taming 2,
            Taming Jaya Industry Park, 43300 Seri Kembangan, Selangor
          </Typography>
          <Grid>
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
        </div>

        <Map
          width="600"
          height="450"
          src="https://www.google.com/maps/embed/v1/place?q=Lot%202188%2C%20Industrial%20Estate%20Selangor%20Taming%20Jaya%2C%20Jalan%20Taming%202%2C%20Taming%20Jaya%20Industry%20Park%2C%2043300%20Seri%20Kembangan%2C%20Selangor&key=AIzaSyDWfsxrQi1Mycs_PD2uIUrQvlIuu9HOV2s"
        />
      </ContactContainer>
    );
  }
}

// src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7977.62302853802!2d103.8362726329516!3d1.287191362130713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1975b6f8b1b3%3A0xa896dd8474135315!2s151+Chin+Swee+Rd%2C+Singapore+169876!5e0!3m2!1sen!2smy!4v1472466768621"

export default ContactComponent;
