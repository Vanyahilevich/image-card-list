import React from 'react';
import styled from 'styled-components';
import { IPost } from '../../../types/post/post-type';
import LikeButton from '../../../shared/ui/like-button';
import { Link } from 'react-router-dom';
import DeleteButton from '../../../shared/ui/delete-button';

const LinkStyled = styled(Link)`
  text-decoration: none;
  max-height: 215px;
`;

const PostContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 215px;
  overflow: hidden;

  &:hover .delete-icon {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: start;
  padding: 10px;
`;

const Text = styled.p`
  font-size: 16px;
  color: #333;
  margin: 0;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  flex: 1;
`;

type PostItemProps = Pick<IPost, 'id' | 'title' | 'thumbnailUrl' | 'liked'> & {
  onLikeToggle: (id: number) => void;
  onDelete: (id: number) => void;
  style?: React.CSSProperties;
};

const PostItem: React.FC<PostItemProps> = ({
  id,
  title,
  thumbnailUrl,
  liked,
  onLikeToggle,
  onDelete,
}) => {
  console.log('[Render] PostItem');
  return (
    <LinkStyled to={`/post/${id}`}>
      <PostContainer>
        <Image src={thumbnailUrl} alt={title} />
        <ContentContainer>
          <Text>{title}</Text>
          <LikeButton liked={liked} onClick={() => onLikeToggle(id)} />
          <DeleteButton onClick={() => onDelete(id)} />
        </ContentContainer>
      </PostContainer>
    </LinkStyled>
  );
};

export default PostItem;
