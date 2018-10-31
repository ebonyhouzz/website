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
  min-height: 600px;
`;

const AboutContainer = styled('div')`
  background-color: #374e6b;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 320px;
`;

const AboutBorder = styled('div')`
  background-color: white;
  top: -100px;
  max-width: 100%;
  margin: 32px;
  padding: 16px;
  @media ${device.mobileL} {
    margin: 0;
    max-width: 540px;
    position: absolute;
    top: -128px;
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
  text-align: center;
  margin-bottom: 8px;
`;

const VisionContainer = styled('div')`
  background-color: #374e6b;
  min-height: 240px;
  display: flex;
  align-items: center;
  flex-direction: column;
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
        <AboutContainer>
          <AboutBorder>
            <AboutContent>
              <AboutTitle use="headline5">ABOUT EBÖNY HÖUZZ</AboutTitle>
              <AboutDescription use="subtitle1">
                The name Eböny is derived from one of the most expensive species
                of timber in Africa and its veneer has been applied in the
                interior design of many of the worlds most prestigious and
                luxurious spaces. Since 2000, our professional and creative team
                has been adhering to strict principles dedicated to designing
                spaces and forms that are most important to you.
              </AboutDescription>
              <AboutDescription use="subtitle1">
                Bespoke Dörrs blend specialist knowledge with the finest
                materials and inimitable creative flair to realise the perfect
                product that is both unique and personal.
              </AboutDescription>
            </AboutContent>
          </AboutBorder>
        </AboutContainer>
        <VisionContainer>
          <VisionTitle use="headline5" theme="on-primary">
            OUR VISION
          </VisionTitle>
          <VisionDescription use="subtitle1" theme="on-primary">
            No matter the size of the project, the goal is ultimately the same:
            to make your personal style shine. We provide new inspiration and
            ideas, while incorporating elements of your liking into every
            concept we present.
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
