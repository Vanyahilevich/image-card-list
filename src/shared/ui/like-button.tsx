import React from 'react';
import styled from 'styled-components';
import { HeardIcon } from '../icons/heard-icon';

const LikeIcon = styled.span<{ $liked: boolean }>`
  color: ${(props) => (props.$liked ? 'red' : 'grey')};
  cursor: pointer;
  width: 30px;
  height: 30px;

  &:hover {
    color: #dc143c;
  }
`;

interface LikeButtonProps {
  liked: boolean;
  onClick: () => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({ liked, onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick();
  };
  return (
    <LikeIcon $liked={liked} onClick={(e) => handleClick(e)}>
      <HeardIcon />
    </LikeIcon>
  );
};

export default LikeButton;
