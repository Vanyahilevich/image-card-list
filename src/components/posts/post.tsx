import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetPostsQuery } from '../../services/post-api';
import { RootState } from '../../store';
import { deletePostById, toggleLike } from '../../features/posts/posts-slice';
import Badge from '../../shared/ui/badge';
import { HeardIcon } from '../../shared/icons/heard-icon';
import PostItem from './ui/post-item';
import PostLayout from './ui/post-layout';
import SkeletonPostList from './ui/skeleton-post-list';
import Pagination from '../../shared/ui/pagination';
import { handleScrollToTop } from '../../utils.tsx/handleScrollToTop';

const LIMIT = 15;
const Posts: React.FC = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const { isLoading } = useGetPostsQuery();
  const { posts, likedPostsCount } = useSelector(
    (state: RootState) => state.posts,
  );
  useEffect(() => {
    handleScrollToTop();
  }, [page]);

  const [filterliked, setFilterLiked] = useState(false);

  const filteredPost = useMemo(() => {
    const startIndex = (page - 1) * LIMIT;
    const endIndex = page * LIMIT;

    const filtered = posts.filter((post) => {
      return filterliked ? post.liked : true;
    });

    return filtered.slice(startIndex, endIndex);
  }, [posts, filterliked, page]);

  const onLikeToggle = useCallback(
    (id: number) => {
      dispatch(toggleLike({ id }));
    },
    [dispatch],
  );
  const handleDeletePostById = useCallback(
    (id: number) => {
      dispatch(deletePostById({ id }));
    },
    [dispatch],
  );
  const handleChangeLiked = useCallback(() => {
    setFilterLiked((prevfilterLiked) => !prevfilterLiked);
    setPage(1);
  }, []);

  return (
    <PostLayout>
      <PostLayout.Header title="Posts">
        <Badge
          count={likedPostsCount}
          onClick={handleChangeLiked}
          filterliked={filterliked}
        >
          <HeardIcon />
        </Badge>
      </PostLayout.Header>
      <PostLayout.Content>
        {isLoading ? (
          <SkeletonPostList />
        ) : filteredPost.length === 0 ? (
          <p>No posts</p>
        ) : (
          filteredPost.map((post) => (
            <PostItem
              key={post.id}
              id={post.id}
              title={post.title}
              thumbnailUrl={post.thumbnailUrl}
              liked={post.liked}
              onLikeToggle={onLikeToggle}
              onDelete={handleDeletePostById}
            />
          ))
        )}
      </PostLayout.Content>
      <PostLayout.Footer title="My Telegram - @vanyakhilevich">
        {filteredPost.length > 0 && (
          <Pagination
            totalCount={posts.length}
            itemsPerPage={LIMIT}
            currentPage={page}
            onPageChange={setPage}
          />
        )}
      </PostLayout.Footer>
    </PostLayout>
  );
};

export default Posts;
