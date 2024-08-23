import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import AppContainer from '../shared/ui/app-container';
import GetBackButton from '../shared/ui/get-back-button';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useParams } from 'react-router-dom';

const PostLayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  min-height: 100%;
  flex-grow: 1;
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
  flex-basis: 0; /* Убедимся, что элемент будет растянут */
  align-content: flex-start;
`;

const PostLayout: FC<{ children: ReactNode }> & {
  Header: FC<{ children: ReactNode; title: string }>;
  Content: FC<{ children: ReactNode }>;
  Footer: FC<{ children?: ReactNode; title: string }>;
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

const ContentWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  padding: 30px 0 0;
`;

const Image = styled.img`
  max-width: 600px;
  width: 600px;
  height: 600px;
  background-color: grey;
  margin-right: 20px;
  object-fit: cover;
`;

const TextContent = styled.div`
  max-width: 500px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 24px;
`;

const Description = styled.p`
  margin-top: 10px;
  font-size: 16px;
  line-height: 1.5;
`;

const PostPage = () => {
  const { id } = useParams<{ id: string }>();

  const numericId = Number(id);

  const post = useSelector((state: RootState) =>
    state.posts.posts.find((post) => post.id === numericId),
  );
  return (
    <AppContainer>
      <PostLayout.Header title={`Post ${numericId}`}>
        <GetBackButton />
      </PostLayout.Header>
      <PostLayout.Content>
        <ContentWrapper>
          <Image src={post?.url} alt={post?.title} />
          <TextContent>
            <Title>{post?.title}</Title>
            <Description>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto debitis quaerat fugit, vitae magni soluta maxime
              obcaecati repellendus corporis illum aut officiis consectetur
              molestias assumenda nostrum, quasi incidunt exercitationem nisi
              fuga, numquam nam in quidem voluptates? Non veritatis rerum
              possimus?
            </Description>
          </TextContent>
        </ContentWrapper>
      </PostLayout.Content>
      <PostLayout.Footer title="My Telegram - @vanyakhilevich" />
    </AppContainer>
  );
};

export default PostPage;
