import { Button } from '@rmwc/button';
import {
  Card,
  CardAction,
  CardActionButtons,
  CardActions,
  CardMedia,
  CardPrimaryAction
} from '@rmwc/card';
import { GridList } from '@rmwc/grid-list';
import { Typography } from '@rmwc/typography';

import * as React from 'react';
import styled from 'styled-components';
import logo from '../../logo-dark-subtitle.svg';
import ProductService from './Product.service';

const ProductContainer = styled.div`
  padding: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CategoryContainer = styled('div')`
  display: flex;
  flex-direction: row;
`;

const CategoryButton = styled(Button)`
  border-radius: 48px;
  marign-left: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  text-transform: none;
`;

const DoorContainer = styled(GridList)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardContainer = styled(Card)`
  width: 240px;
  margin: 8px;
`;

const CardContent = styled('div')`
  padding: 8px;
`;

const DoorTitle = styled(Typography)`
  margin: 0;
  marign-bottom: 8px;
`;

const DoorDescription = styled(Typography)`
  margin: 0;
`;

class ProductComponent extends React.Component {
  public state = {
    doors: [],
    selectedDoors: []
  };

  private categories = [
    { index: 0, name: 'ALL', type: 'all' },
    { index: 1, name: 'NATURAL Series', type: 'natural' },
    { index: 2, name: 'VENEER Series', type: 'veneer' },
    { index: 3, name: 'PAINTED Series', type: 'painted' }
  ];

  public async componentDidMount() {
    const productService = new ProductService();
    const doors = await productService.getDoors();
    this.setState({ doors, selectedDoors: doors });
  }

  public handleSelectType = (type: string) => () => {
    const { doors } = this.state;

    const filtered = doors.filter(
      (door: any) =>
        door.type.trim().toLowerCase() === type.trim().toLowerCase()
    );

    this.setState({
      selectedDoors: type === 'all' ? doors : filtered
    });
  };

  public renderDoors = (door: any, index: number) => (
    <CardContainer key={index}>
      <CardPrimaryAction>
        <CardMedia
          square={true}
          style={{
            backgroundImage: `url(${door.image})`
          }}
        />
        <CardContent>
          <DoorTitle use="headline6" tag="h3">
            {door.name}
          </DoorTitle>
          <DoorDescription use="subtitle1" tag="p">
            {door.description}
          </DoorDescription>
        </CardContent>
      </CardPrimaryAction>
      <CardActions>
        <CardActionButtons>
          <CardAction>More</CardAction>
        </CardActionButtons>
      </CardActions>
    </CardContainer>
  );

  public render() {
    // const { productRef } = this.props;
    const { selectedDoors } = this.state;
    return (
      <ProductContainer id="product">
        <Typography use="headline4" tag="h2">OUR PRODUCT</Typography>
        <img src={logo} alt="logo" width="320" />
        <CategoryContainer>
          {this.categories.map(category => (
            <CategoryButton
              key={category.name}
              outlined={true}
              onClick={this.handleSelectType(category.type)}
            >
              {category.name}
            </CategoryButton>
          ))}
        </CategoryContainer>

        <DoorContainer tileAspect="3x4">
          {selectedDoors.map(this.renderDoors)}
        </DoorContainer>

        <Typography use="body1" tag="p">
          Select from our series of designs or send us your design to get a free
          quotation.
        </Typography>
      </ProductContainer>
    );
  }
}

export default ProductComponent;
