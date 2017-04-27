import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './App.scss';

class App extends Component {

  render() {
    const { children } = this.props;

    return (
      <div className={styles.appContainer}>
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
