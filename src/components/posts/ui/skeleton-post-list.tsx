import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';

const SkeletonPostStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const SkeletonPostList = () => {
  return (
    <>
      <SkeletonPost />
      <SkeletonPost />
      <SkeletonPost />
      <SkeletonPost />
      <SkeletonPost />
      <SkeletonPost />
      <SkeletonPost />
      <SkeletonPost />
      <SkeletonPost />
      <SkeletonPost />
      <SkeletonPost />
      <SkeletonPost />
    </>
  );
};

const SkeletonPost = () => {
  return (
    <SkeletonPostStyled>
      <Skeleton width={'100%'} height={150} />
      <Skeleton width={'70%'} height={40} />
    </SkeletonPostStyled>
  );
};

export default SkeletonPostList;
