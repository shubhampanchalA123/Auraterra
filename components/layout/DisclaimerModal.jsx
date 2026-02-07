'use client';

import { useState, useEffect } from 'react';

export default function DisclaimerModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('auraterra_disclaimer_accepted');
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem('auraterra_disclaimer_accepted', 'true');
    setIsVisible(false);
  };

  const handleDisagree = () => {
    window.location.href = 'https://www.google.com';
  };

  if (!isVisible) return null;

  return (
    <div style={styles.backdrop}>
      <div style={styles.modal}>
        <h2 style={styles.title}>Disclaimer</h2>
        <p style={styles.text}>
          Welcome to Auratera! Before you continue, please read and accept our terms.
          This website uses cookies and collects basic information for better user experience.
          By clicking "I Agree", you consent to our terms and conditions.
        </p>
        <div style={styles.buttonContainer}>
          <button 
            onClick={handleAgree}
            style={styles.agreeBtn}
          >
            I Agree
          </button>
          <button 
            onClick={handleDisagree}
            style={styles.disagreeBtn}
          >
            I Disagree
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 255, 0.3)', // Blue backdrop
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    maxWidth: '500px',
    width: '90%',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  },
  title: {
    marginTop: 0,
    marginBottom: '15px',
    color: '#333',
    fontSize: '24px',
  },
  text: {
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '25px',
    fontSize: '16px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    flexWrap: 'wrap',
  },
  agreeBtn: {
    padding: '12px 30px',
    backgroundColor: '#22c55e',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.2s',
  },
  disagreeBtn: {
    padding: '12px 30px',
    backgroundColor: '#ef4444',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.2s',
  },
};
