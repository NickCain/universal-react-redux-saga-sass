import React, { PureComponent } from 'react';

import styles from './Header.scss';

class Header extends PureComponent {
  render() {
    return (
      <div className={styles.header}>
        <span>Header</span>
      </div>
    );
  }
}

export default Header;
