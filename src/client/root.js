import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { ReduxAsyncConnect } from 'redux-connect';

import '../app/styles/base.scss';

class Root extends Component {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <Router
          key={module.hot && new Date()}
          render={props => <ReduxAsyncConnect {...props} />}
          {...this.props}
        />
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  routes: React.PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired
};

export default Root;
