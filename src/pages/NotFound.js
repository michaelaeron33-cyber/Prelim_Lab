import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
  const styles = {
    container: {
      height: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '2rem',
      fontFamily: 'Inter, system-ui, sans-serif',
      color: '#0f172a'
    },
    errorCode: {
      fontSize: '8rem',
      fontWeight: '800',
      margin: '0',
      color: '#6366f1',
      lineHeight: '1'
    },
    title: {
      fontSize: '2rem',
      margin: '1rem 0'
    },
    text: {
      fontSize: '1.1rem',
      color: '#475569',
      maxWidth: '500px',
      marginBottom: '2rem'
    },
    button: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.6rem',
      padding: '0.8rem 1.8rem',
      borderRadius: '999px',
      background: '#6366f1',
      color: '#fff',
      fontWeight: '600',
      textDecoration: 'none',
      transition: 'all 0.2s'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.errorCode}>404</h1>
      <h2 style={styles.title}>Page Not Found</h2>
      <p style={styles.text}>
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" style={styles.button}>
        <FaHome /> Go back home
      </Link>
    </div>
  );
};

export default NotFound;
