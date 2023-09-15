import React from 'react';
import './Footer.css'; // Create a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Column 1</h3>
        <p>Content for column 1</p>
      </div>
      <div className="footer-column">
        <h3>Column 2</h3>
        <p>Navigation</p>
        <p>Navigation</p>
        <p>Navigation</p>
        <p>Navigation</p>
        <p>Navigation</p>
      </div>
      <div className="footer-column">
        <h3>Column 3</h3>
        <p>Content for column 3</p>
      </div>
      <div className="footer-column">
        <h3>Column 4</h3>
        <p>Content for column 4</p>
      </div>
    </footer>
  );
};

export default Footer;
