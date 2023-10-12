import React, { useState } from 'react';

const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

function App() {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; 

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="App">
      <h1>Pagination Example</h1>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= items.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
