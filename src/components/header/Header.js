import React from 'react';
import styles from './header.module.css';
import Search from '../search/Search';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.logo}>
          <h1><span>R</span>eddit<span>M</span>inimal</h1>
        </div>
        <div>
          <Search />
        </div>
      </div>
    </header>
  )
}

export default Header;