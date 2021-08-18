import React, { useState } from 'react';
import About from './pages/About';
import Works from './pages/Works';
import Header from './Header';

export default function PortfolioApp() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This function is checking to see what the value of `currentPage` is.
  // Depending on the value of currentPage, we return the corresponding
  // component to render.
  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;

      case 'My Work':
        return <Works />;

      // case 'Contact':
      //   return <Contact />;

      default:
        return <About />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header handlePageChange={handlePageChange} />

      {renderPage()}
    </div>
  );
}
