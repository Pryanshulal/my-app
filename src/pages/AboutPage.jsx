import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';

const AboutPage = () => {
  const [message, setMessage] = useState('');

  const styles = {
    container: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr', // Two columns: one for the picture and one for the info
      gap: '20px', // Space between the columns
      alignItems: 'center',
      padding: '20px',
    },
    pictureContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    profilePicture: {
      width: '100%',
      maxWidth: '250px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow for a professional look
    },
    infoContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px', // Space between text elements
    },
    nameButton: {
      background: 'none',
      border: 'none',
      color: '#007bff',
      fontSize: '16px',
      cursor: 'pointer',
      padding: '0',
    },
    nameButtonHover: {
      textDecoration: 'underline',
    },
    easterEggMessage: {
      color: 'green',
      fontWeight: 'bold',
      marginTop: '10px',
    },
  };

  return (
    <MainLayout>
      <div style={styles.container}>
        {/* Picture Section */}
        <div style={styles.pictureContainer}>
          <img src="/pic.jpg" alt="Profile" style={styles.profilePicture} />
        </div>

        {/* Info Section */}
        <div style={styles.infoContainer}>
          <h1>About the App</h1>
          <p>
            <strong>App Name:</strong> To-Do List App
          </p>
          <p>
            <strong>Developer:</strong>{' '}
            <button
              style={styles.nameButton}
              onClick={() => setMessage('You found the Easter egg!')}
            >
              Pryanshu
            </button>
          </p>
          <p>
            <strong>Date:</strong> {new Date().toLocaleDateString()}
          </p>
          {message && <p style={styles.easterEggMessage}>{message}</p>}
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
