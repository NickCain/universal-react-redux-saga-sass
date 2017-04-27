import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Landing from '../../components/Landing';

class LandingContainer extends Component {
  render() {
    return <Landing {...this.props} />;
  }
}

LandingContainer.propTypes = {
  children: PropTypes.element.isRequired
};

export default LandingContainer;
