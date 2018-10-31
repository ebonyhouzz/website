import * as React from 'react';
import Contact from './contact/Contact.component';
import Hero from './hero/Hero.component';
import Product from './product/Product.component';

class HomeComponent extends React.Component {
  public render() {
    // const { productRef } = this.props;
    return (
      <React.Fragment>
        <Hero />
        <Product />
        <Contact />
      </React.Fragment>
    );
  }
}

export default HomeComponent;
