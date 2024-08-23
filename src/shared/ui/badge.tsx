import React from 'react';
import styled from 'styled-components';

interface BadgeProps {
  count: number;
  filterliked: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

const BadgeContainer = styled.div`
    position: relative;
    display: inline-block;
    width: 30px;
    height: 30px;
    color: "red"
    background-color: "red";
    cursor: pointer;
  `;

const BadgeCount = styled.span`
  position: absolute;
  z-index: 10;
  top: 14px;
  right: -4px;
  color: red;
  background-color: white;
  border: 1px solid red;
  padding: 1px 4px;
  border-radius: 3px;
  font-size: 10px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledIcon = styled.div<{ $filterliked: boolean }>`
  color: ${(props) => (props.$filterliked ? 'red' : 'black')};
`;

const Badge: React.FC<BadgeProps> = ({
  count = 0,
  children,
  onClick,
  filterliked,
}) => {
  return (
    <BadgeContainer onClick={onClick}>
      <StyledIcon $filterliked={filterliked}>{children}</StyledIcon>
      {count > 0 && <BadgeCount>{count}</BadgeCount>}
    </BadgeContainer>
  );
};

export default Badge;
