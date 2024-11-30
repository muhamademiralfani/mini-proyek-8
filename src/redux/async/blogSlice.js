import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const initialState = {
  recentBlog: [],
  blogs: [],
  blog: {},
  loading: false,
  error: null,
  isSuccess: false,
  currentPage: 1,
};

export const fetchRecentBlog = createAsyncThunk('blog/fetchRecentBlog', async () => {
  const response = await axios.get(`${API_URL}/api/games/news?page=1&search`);
  return response.data; // Adjust based on your API response structure
});

export const fetchBlogs = createAsyncThunk('blog/fetchBlogs', async (page = 1) => {
  const response = await axios.get(`${API_URL}/api/games?page=${page}`);
  return response.data; // Assuming response.data contains blogs
});

export const fetchBlogDetail = createAsyncThunk('blog/fetchBlogDetail', async (id) => {
  const response = await axios.get(`${API_URL}/api/detail/${id}`);
  return response.data.results; // Adjust based on your API response structure
});

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    resetBlogs: (state) => {
      state.blogs = [];
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecentBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecentBlog.fulfilled, (state, action) => {
        state.recentBlog = action.payload;
        state.isSuccess = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchRecentBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.blogs = action.payload;
        state.isSuccess = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(fetchBlogDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogDetail.fulfilled, (state, action) => {
        state.blog = action.payload;
        state.isSuccess = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchBlogDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCurrentPage, resetBlogs } = blogSlice.actions;

export default blogSlice.reducer;
