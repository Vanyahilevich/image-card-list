import React from 'react';
import styled from 'styled-components';

const AppContainerStyled = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const AppContainer = ({ children }: { children: React.ReactNode }) => {
  return <AppContainerStyled>{children}</AppContainerStyled>;
};

export default AppContainer;
