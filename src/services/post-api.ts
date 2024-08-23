import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from '../types/post/post-type';

type QueryType = {
  _limit?: number;
  _page?: number;
};


export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/photos',
   
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], void>({
      query: (query) => ""
    }),
    getPostById: builder.query<IPost, number>({
      query: (id) => `/${id}`, 
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = postApi;
