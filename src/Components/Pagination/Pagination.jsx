import React from 'react';
import { Container, CustomButton, PageNumber } from './styles';

const Pagination = ({ currentPage, setPage, totalPages }) => {
  const handlePrevious = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (totalPages === 0) return null;

  return (
    <Container>
      <CustomButton
        variant="contained"
        color="primary"
        onClick={handlePrevious}
        type="button"
        disabled={currentPage === 1}
      >
        Prev
      </CustomButton>
      <PageNumber variant="h4">{currentPage}</PageNumber>
      <CustomButton
        variant="contained"
        color="primary"
        onClick={handleNext}
        type="button"
        disabled={currentPage === totalPages}
      >
        Next
      </CustomButton>
    </Container>
  );
};

export default Pagination;
