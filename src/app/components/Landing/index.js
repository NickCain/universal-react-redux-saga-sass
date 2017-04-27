import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';

class Landing extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

Landing.propTypes = {
};

Landing.propTypes = {
  children: PropTypes.element.isRequired
};
export default Landing;
