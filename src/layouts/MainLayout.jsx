import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div style={styles.container}>
      {children}
      <footer style={styles.footer}>© 2024 Pryanshu</footer>
    </div>
  );
};

const styles = {
  container: {
    margin: '20px auto',
    padding: '20px',
    maxWidth: '800px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
  footer: {
    marginTop: '20px',
    textAlign: 'center',
    color: '#888',
  },
};

export default MainLayout;
