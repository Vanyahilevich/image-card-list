import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px;
  margin: 0 5px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  &:disabled {
    background-color: #d6d6d6;
    cursor: not-allowed;
  }
`;

type PaginationProps = {
  currentPage: number;
  totalCount: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
};
const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalCount,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <PaginationContainer>
      <Button onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </Button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <Button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </Button>
    </PaginationContainer>
  );
};

export default Pagination;
