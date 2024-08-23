import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { postApi } from '../../services/post-api';
import { IPost } from '../../types/post/post-type';

interface PostsState {
  posts: IPost[];
  likedPostsCount: number;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: PostsState = {
  posts: [],
  likedPostsCount: 0,
  status: 'idle',
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<{posts: IPost[]}>) {
      state.posts = action.payload.posts;
    },
    
    toggleLike(state, action: PayloadAction<{ id: number }>) {
      const postId = action.payload.id;
      const selectedPost = state.posts.find(post => post.id === postId);
      
      if (!selectedPost) return; 
      selectedPost.liked = !selectedPost.liked; 
      state.likedPostsCount = state.posts.reduce((acc, post) => {
        if (post.liked) {
          return acc + 1;
        }
        return acc;
      }, 0)
    },
    deletePostById(state, action: PayloadAction<{ id: number }>) {
      state.posts = state.posts.filter(post => post.id !== action.payload.id);
      state.likedPostsCount = state.posts.reduce((acc, post) => {
        if (post.liked) {
          return acc + 1;
        }
        return acc;
      }, 0)
    }
  
  
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(postApi.endpoints.getPosts.matchFulfilled, (state, action) => {
        state.posts = [...state.posts, ...action.payload.map(post => ({
          ...post,
          liked: false,
        }))];
        state.status = 'succeeded';
      })
      .addMatcher(postApi.endpoints.getPosts.matchPending, (state) => {
        state.status = 'loading';
      })
      .addMatcher(postApi.endpoints.getPosts.matchRejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setPosts, toggleLike, deletePostById } = postsSlice.actions;
export default postsSlice.reducer;
