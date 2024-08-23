import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const PostLayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  min-height: 100%;
`;
const HeaderLayoutStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const FooterLayoutStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
`;
const ContentLayoutStyled = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  align-content: flex-start;
  gap: 21px;
  & > * {
    flex: 0 1 calc(33.33% - 14px);
  }
  & > p {
    font-size: 24px;
    text-align: center;
    flex: 0 1 100%;
  }
`;

const PostLayout: FC<{ children: ReactNode }> & {
  Header: FC<{ children: ReactNode; title: string }>;
  Content: FC<{ children: ReactNode }>;
  Footer: FC<{ children: ReactNode; title: string }>;
} = ({ children }) => {
  return <PostLayoutStyled>{children}</PostLayoutStyled>;
};

PostLayout.Header = ({ children, title }) => {
  return (
    <HeaderLayoutStyled>
      <h1>{title}</h1>
      {children}
    </HeaderLayoutStyled>
  );
};

PostLayout.Content = ({ children }) => {
  return <ContentLayoutStyled>{children}</ContentLayoutStyled>;
};

PostLayout.Footer = ({ children, title }) => {
  return (
    <FooterLayoutStyled>
      <h1>{title}</h1>
      {children}
    </FooterLayoutStyled>
  );
};

export default PostLayout;
