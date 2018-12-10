import { Typography } from '@rmwc/typography';

import * as React from 'react';
import styled from 'styled-components';
import logo from '../../logo-light.svg';
import { device } from '../../utils/devices';
import hero from './hero.jpg';
import quote from './quotes.jpg';

const HeroContainer = styled('div')`
  background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
    url(${hero});
  background-attachment: fixed;
  background-position: 50% 80%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 220px;
  @media ${device.mobileL} {
    min-height: 600px;
  }
`;

const AboutContainer = styled('div')`
  background-color: #374e6b;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 420px;
`;

const AboutBorder = styled('div')`
  background-color: white;
  top: -100px;
  max-width: 100%;
  padding: 16px;
  @media ${device.mobileL} {
    margin: 0;
    max-width: 640px;
    position: absolute;
    top: -128px;
    margin: 32px;
  }
`;

const AboutContent = styled('div')`
  padding: 16px;
  border-style: solid;
  border-width: thin;
`;

const AboutTitle = styled(Typography)`
  text-align: center;
  display: block;
  margin-bottom: 16px;
  color: #374e6b;
`;

const AboutDescription = styled(Typography)`
  display: block;
  margin-bottom: 8px;
`;

const VisionContainer = styled('div')`
  background-color: #374e6b;
  min-height: 240px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 32px;
  @media ${device.mobileL} {
    padding-top: 0;
  }
`;

const VisionTitle = styled(Typography)`
  text-align: center;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 16px;
`;

const VisionDescription = styled(Typography)`
  text-align: center;
  margin-left: 16px;
  margin-right: 16px;
  max-width: 100%;
  @media ${device.mobileL} {
    max-width: 540px;
  }
`;

const QuoteContainer = styled('div')`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${quote});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
`;

const QuoteText = styled(Typography)`
  margin: 16px;
`;

const QuoteAuthor = styled(Typography)`
  margin-left: 16px;
  margin-right: 16px;
  text-align: end;
`;

class HeroComponent extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <HeroContainer>
          <img src={logo} width="320" alt="logo" />
        </HeroContainer>
        <AboutContainer id="about">
          <AboutBorder>
            <AboutContent>
              <AboutTitle use="headline5">About EBONY Dörr</AboutTitle>
              <AboutDescription use="subtitle1">
                At EBONY Dörr our aspiration to custom wood products is
                represented by Ebony, one of the most priced species of wood
                known for its durability, unique & opulent wood grains. It is
                among the most demanded but rare material for fine wood products
                and interior design of many luxurious spaces.
              </AboutDescription>
              <AboutDescription use="subtitle1">
                Since the year 2000, our professional and creative team is
                dedicated to designing spaces and forms that are most important
                to you and EBONY Dörr is all about filling that missing piece
                within your home, the little finishing details which ultimately
                defines durability and luxury.
              </AboutDescription>
              <AboutDescription use="subtitle1">
                EBONY Dörr brings to live, custom door of your designs or just
                select from our many individualized door designs, that best suit
                your personal styles. We are very certain that our talented team
                of traditional craftsman at EBONY Dörr are able to realise even
                the most complexed design of doors and deliver a unique
                centerpiece for your home, in the most professional manner.
              </AboutDescription>
            </AboutContent>
          </AboutBorder>
        </AboutContainer>
        <VisionContainer id="vision">
          <VisionTitle use="headline5" theme="on-primary">
            OUR PHILOSOPHY
          </VisionTitle>
          <VisionDescription use="subtitle1" theme="on-primary">
            Creating access for anyone to fulfil their design dreams. Quality
            and a well crafted wood product is our transcendental desires.
            <br />“ We customise your dreams “
          </VisionDescription>
        </VisionContainer>
        <QuoteContainer>
          <QuoteText use="subtitle1" theme="on-primary">
            “Luxury is when it seems flawless, when you reach the right balance
            between all elements, understated theatricality- that is what my
            luxury is all about”
          </QuoteText>
          <QuoteAuthor use="subtitle2" theme="secondary">
            - Jean Louis Deniot, Interior Designer
          </QuoteAuthor>
        </QuoteContainer>
      </React.Fragment>
    );
  }
}

export default HeroComponent;
