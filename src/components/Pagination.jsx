import React from 'react';

const Pagination = ({length,CharactersPerPage,handlePagination}) => {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(length / CharactersPerPage); i++) {
    paginationNumbers.push(i);
  }

  return (
    <div className='pagination'>
      {paginationNumbers.map((pageNumber) => (
        <button key={pageNumber} className={currentPage === pageNumber ? 'active' : ''} onClick={() => handlePagination}>{pageNumber}</button>
      ))}
    </div>
  );
};

export default Pagination;
