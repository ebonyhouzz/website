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
import { Subscription } from 'rxjs';
import styled from 'styled-components';
import logo from '../../logo-dark-subtitle.svg';
import masterCard from './master_card.svg';
import ProductService from './Product.service';
import visa from './visa.svg';

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

const CreditCardContainer = styled('div')`
  display: flex;
  justify-content: space-around;
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 16px;
`;

const PdfLink = styled('a')`
  text-decoration: none;
`;

const CatalogueContainer = styled(Button)`
  display: flex;
  margin-top: 48px;
  margin-bottom: 48px;
  margin-left: auto;
  margin-right: auto;
`;

class ProductComponent extends React.Component {
  public state = {
    doors: [],
    selectedDoors: []
  };

  private productSubscription: Subscription;

  private categories = [
    { index: 0, name: 'ALL', type: 'all' },
    { index: 1, name: 'Veneer Series', type: 'veneer' },
    { index: 2, name: 'Solid Timber Series', type: 'timber' },
    // { index: 3, name: 'PAINTED Series', type: 'painted' }
  ];

  public async componentDidMount() {
    const productService = new ProductService();
    this.productSubscription = productService
      .getDoors()
      .subscribe(doors => this.setState({ doors, selectedDoors: doors }));
  }

  public componentWillUnmount(){
    this.productSubscription.unsubscribe();
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

        <div>
          <Typography use="headline6" tag="p">
            We accept Visa and MasterCard
          </Typography>
          <CreditCardContainer>
            <img src={visa} alt="Visa"/>
            <img src={masterCard} alt="Master Card"/>
          </CreditCardContainer>
          <PdfLink href="https://firebasestorage.googleapis.com/v0/b/ebonyhouzz.appspot.com/o/EBONY%20Do%CC%88rr%20catalogue.pdf?alt=media&token=a68223d7-3bfb-4084-a93e-0ff847bef447">
            <CatalogueContainer theme="text-primary-on-background">
              <i className="material-icons">
                picture_as_pdf
              </i>
              &nbsp;
              Ebony Dörr Catalogue
            </CatalogueContainer>
          </PdfLink>
        </div>
      </ProductContainer>
    );
  }
}

export default ProductComponent;
