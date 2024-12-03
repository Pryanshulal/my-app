import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const TabBar = () => {
  const location = useLocation();

  const styles = {
    tabBar: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#007bff',
      padding: '10px',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      margin: '0 15px',
      padding: '10px 20px',
      borderRadius: '5px',
    },
    activeLink: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.tabBar}>
      <Link
        to="/"
        style={{
          ...styles.link,
          ...(location.pathname === '/' ? styles.activeLink : {}),
        }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{
          ...styles.link,
          ...(location.pathname === '/about' ? styles.activeLink : {}),
        }}
      >
        About
      </Link>
    </div>
  );
};

export default TabBar;
