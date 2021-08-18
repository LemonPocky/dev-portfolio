import React, { useState } from 'react';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This function is checking to see what the value of `currentPage` is.
  // Depending on the value of currentPage, we return the corresponding
  // component to render.
  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;

      case 'Portfolio':
        return <Portfolio />;

      case 'Contact':
        return <Contact />;

      default:
        return <About />;
    }
  };

  return <div>{renderPage()}</div>;
}
