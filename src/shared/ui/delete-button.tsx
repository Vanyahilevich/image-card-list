import React from 'react';
import styled from 'styled-components';
import { DeleteIcon } from '../icons/delete-icon';

const DeleteButtonStyled = styled.div`
  color: black;
  cursor: pointer;
  width: 30px;
  height: 30px;

  &:hover {
    color: grey;
  }
`;

interface DeleteButtonProps {
  onClick: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick();
  };
  return (
    <DeleteButtonStyled onClick={(e) => handleClick(e)}>
      <DeleteIcon />
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
