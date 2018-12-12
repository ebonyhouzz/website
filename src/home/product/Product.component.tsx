import { Button } from '@rmwc/button';
import { Card, CardMedia, CardPrimaryAction } from '@rmwc/card';
import { Dialog, DialogButton } from '@rmwc/dialog';
import { Grid, GridCell } from '@rmwc/grid';
import { GridList } from '@rmwc/grid-list';
import { IconButton } from '@rmwc/icon-button';
import { Typography } from '@rmwc/typography';
import { get } from 'lodash';

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
  background-color: #374e6b;
`;

const DoorMedia = styled(CardMedia)`
  background-size: contain;
  margin: 8px;
`;

const DoorTitle = styled(Typography)`
  margin: 0;
  text-align: center;
`;

const DoorAction = styled(Typography)`
  margin: 0;
  text-align: center;
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

const DialogContainer = styled(Grid)`
  padding: 16px;
  width: 100%;
  overflow-y: scroll;
`;

const DialogCellCloseContainer = styled(GridCell)`
  align-items: flex-end;
  justify-content: flex-end;
  display: flex;
`

const DialogCellMedia = styled(GridCell)`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 480px;
`;

const DialogCellTitle = styled(Typography)`
  margin: 0;
`;

const DialogCellValue = styled(Typography)`
  margin: 0;
  margin-bottom: 16px;
`;

const DialigCellList = styled('ul')`
  margin-block-start: 0;
  padding-inline-start: 16px;
  margin-bottom: 16px;
`;
class ProductComponent extends React.Component {
  public state = {
    door: null,
    doors: [],
    openDialog: false,
    selectedDoors: []
  };

  private productSubscription: Subscription;

  private categories = [
    { index: 0, name: 'ALL', type: 'all' },
    { index: 1, name: 'Veneer Series', type: 'veneer' },
    { index: 2, name: 'Solid Timber Series', type: 'timber' }
    // { index: 3, name: 'PAINTED Series', type: 'painted' }
  ];

  public async componentDidMount() {
    const productService = new ProductService();
    this.productSubscription = productService
      .getDoors()
      .subscribe(doors => this.setState({ doors, selectedDoors: doors }));
  }

  public componentWillUnmount() {
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

  public handleSelectDoor = (door: any) => () =>
    this.setState({ door, openDialog: true });

  public renderDoors = (door: any, index: number) => (
    <div key={index} onClick={this.handleSelectDoor(door)}>
      <CardContainer>
        <CardPrimaryAction>
          <DoorMedia
            square={true}
            style={{
              backgroundImage: `url(${door.image})`
            }}
          />
          <CardContent>
            <DoorTitle use="headline6" tag="h3" theme="on-primary">
              {door.name}
            </DoorTitle>
            <DoorAction use="button" tag="p" theme="on-primary">
              More
            </DoorAction>
          </CardContent>
        </CardPrimaryAction>
      </CardContainer>
    </div>
  );

  public closeDialog = () => this.setState({ openDialog: false });

  public renderDialog = () => {
    const { door, openDialog } = this.state;
    if (!door) {
      return null;
    }
    return (
      <Dialog open={openDialog} onClose={this.closeDialog}>
        <DialogContainer>
          <GridCell phone={3} tablet={7} desktop={11} />
          <DialogCellCloseContainer span={1}>
            <IconButton icon="close" label="Close" onClick={this.closeDialog}>
              <DialogButton action="close" isDefaultAction={true} />
            </IconButton>
          </DialogCellCloseContainer>
          <DialogCellMedia
            phone={4}
            tablet={4}
            desktop={6}
            style={{
              backgroundImage: `url(${get(door, 'image')})`
            }}
          />
          <GridCell phone={4} tablet={4} desktop={6}>
            <div>
              <DialogCellTitle use="subtitle2" tag="p">
                Design Code:
              </DialogCellTitle>
              <DialogCellValue use="body2" tag="p">
                {get(door, 'name')}
              </DialogCellValue>

              <DialogCellTitle use="subtitle2" tag="p">
                Standard Sizes:
              </DialogCellTitle>
              <DialigCellList>
                {get(door, 'options', []).map((option: any, index: number) => (
                  <li key={index}>
                    <DialogCellValue use="body2">
                      {get(option, 'size', '-')} - <b>RM {get(option, 'price', '-')}</b>
                    </DialogCellValue>
                  </li>
                ))}
              </DialigCellList>

              <DialogCellTitle use="subtitle2" tag="p">
                Other Sizes:
              </DialogCellTitle>
              <DialogCellValue use="body2" tag="p">
                Contact Us
              </DialogCellValue>

              <DialogCellTitle use="subtitle2" tag="p">
                Composition:
              </DialogCellTitle>
              <DialogCellValue use="body2" tag="p">
                {get(door, 'description', '-')}
              </DialogCellValue>

              <DialogCellTitle use="subtitle2" tag="p">
                Finishing:
              </DialogCellTitle>
              <DialogCellValue use="body2" tag="p">
                {get(door, 'finishing', '-')}
              </DialogCellValue>
            </div>
          </GridCell>

          <GridCell phone={4} tablet={8} desktop={12}>
            <Typography use="caption" tag="p">
              Prices quoted does not include transport, installation, fixtures &
              fitting
            </Typography>
            <Typography use="caption" tag="p">
              Please take note that the actual gradient and colour tone of the
              finished product may vary from picture or sample. Natural timber
              products are unique depending on its geographic location and
              growing conditions.
            </Typography>
          </GridCell>
        </DialogContainer>
      </Dialog>
    );
  };

  public render() {
    const { selectedDoors } = this.state;
    return (
      <>
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
            Select from our series of designs or send us your design to get a
            free quotation.
          </Typography>

          <div>
            <Typography use="headline6" tag="p">
              We accept Visa and MasterCard
            </Typography>
            <CreditCardContainer>
              <img src={visa} alt="Visa" />
              <img src={masterCard} alt="Master Card" />
            </CreditCardContainer>
            <PdfLink href="https://firebasestorage.googleapis.com/v0/b/ebonyhouzz.appspot.com/o/EBONY%20Do%CC%88rr%20catalogue.pdf?alt=media&token=a68223d7-3bfb-4084-a93e-0ff847bef447">
              <CatalogueContainer theme="text-primary-on-background">
                <i className="material-icons">picture_as_pdf</i>
                &nbsp; Ebony Dörr Catalogue
              </CatalogueContainer>
            </PdfLink>
          </div>
        </ProductContainer>
        {this.renderDialog()}
      </>
    );
  }
}

export default ProductComponent;
