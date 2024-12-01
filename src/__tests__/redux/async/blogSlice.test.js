/* eslint-disable no-undef */
import reducer, {
  fetchRecentBlog,
  fetchBlogs,
  fetchBlogDetail,
  subscribe,
  setCurrentPage,
  resetBlogs,
} from '../../../redux/async/blogSlice'; // Ganti dengan path yang sesuai
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('axios');

describe('blogSlice', () => {
  const initialState = {
    recentBlog: [],
    blogs: [],
    blog: {},
    loading: false,
    error: null,
    isSuccess: false,
    subscribed: false,
    currentPage: 1,
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle setCurrentPage', () => {
    const nextState = reducer(initialState, setCurrentPage(2));
    expect(nextState.currentPage).toEqual(2);
  });

  it('should handle resetBlogs', () => {
    const stateWithBlogs = {
      ...initialState,
      blogs: [{ id: 1, title: 'Test Blog' }],
      currentPage: 2,
    };
    const nextState = reducer(stateWithBlogs, resetBlogs());
    expect(nextState.blogs).toEqual([]);
    expect(nextState.currentPage).toEqual(1);
  });

  describe('fetchRecentBlog', () => {
    it('should handle fetchRecentBlog pending', () => {
      const nextState = reducer(initialState, fetchRecentBlog.pending());
      expect(nextState.loading).toBe(true);
      expect(nextState.error).toBe(null);
    });

    it('should handle fetchRecentBlog fulfilled', async () => {
      const mockData = [{ id: 1, title: 'Recent Blog' }];
      axios.get.mockResolvedValueOnce({ data: mockData });

      const store = mockStore(initialState);
      await act(async () => {
        await store.dispatch(fetchRecentBlog());
      });

      const actions = store.getActions();
      expect(actions[0].type).toEqual(fetchRecentBlog.pending.type);
      expect(actions[1].type).toEqual(fetchRecentBlog.fulfilled.type);
      expect(actions[1].payload).toEqual(mockData);
    });

    it('should handle fetchRecentBlog rejected', async () => {
      const errorMessage = 'Error fetching recent blogs';
      axios.get.mockRejectedValueOnce(new Error(errorMessage));

      const store = mockStore(initialState);
      await act(async () => {
        await store.dispatch(fetchRecentBlog());
      });

      const actions = store.getActions();
      expect(actions[0].type).toEqual(fetchRecentBlog.pending.type);
      expect(actions[1].type).toEqual(fetchRecentBlog.rejected.type);
      expect(actions[1].error.message).toEqual(errorMessage);
    });
  });

  describe('fetchBlogs', () => {
    it('should handle fetchBlogs pending', () => {
      const nextState = reducer(initialState, fetchBlogs.pending());
      expect(nextState.loading).toBe(true);
      expect(nextState.error).toBe(null);
    });

    it('should handle fetchBlogs fulfilled', async () => {
      const mockData = [{ id: 1, title: 'Blog 1' }, { id: 2, title: 'Blog 2' }];
      axios.get.mockResolvedValueOnce({ data: mockData });

      const store = mockStore(initialState);
      await act(async () => {
        await store.dispatch(fetchBlogs(1));
      });

      const actions = store.getActions();
      expect(actions[0].type).toEqual(fetchBlogs.pending.type);
      expect(actions[1].type).toEqual(fetchBlogs.fulfilled.type);
      expect(actions[1].payload).toEqual(mockData);
    });

    it('should handle fetchBlogs rejected', async () => {
      const errorMessage = 'Error fetching blogs';
      axios.get.mockRejectedValueOnce(new Error(errorMessage));

      const store = mockStore(initialState);
      await act(async () => {
        await store.dispatch(fetchBlogs(1));
      });

      const actions = store.getActions();
      expect(actions[0].type).toEqual(fetchBlogs.pending.type);
      expect(actions[1].type).toEqual(fetchBlogs.rejected.type);
      expect(actions[1].error.message).toEqual(errorMessage);
    });
  });

  describe('fetchBlogDetail', () => {
    it('should handle fetchBlogDetail pending', () => {
      const nextState = reducer(initialState, fetchBlogDetail.pending());
      expect(nextState.loading).toBe(true);
      expect(nextState.error).toBe(null);
    });

    it('should handle fetchBlogDetail fulfilled', async () => {
      const mockData = { id: 1, title: 'Blog Detail' };
      axios.get.mockResolvedValueOnce({ data: { results: mockData } });

      const store = mockStore(initialState);
      await act(async () => {
        await store.dispatch(fetchBlogDetail(1));
      });

      const actions = store.getActions();
      expect(actions[0].type).toEqual(fetchBlogDetail.pending.type);
      expect(actions[1].type).toEqual(fetchBlogDetail.fulfilled.type);
      expect(actions[1].payload).toEqual(mockData);
    });

    it('should handle fetchBlogDetail rejected', async () => {
      const errorMessage = 'Error fetching blog detail';
      axios.get.mockRejectedValueOnce(new Error(errorMessage));

      const store = mockStore(initialState);
      await act(async () => {
        await store.dispatch(fetchBlogDetail(1));
      });

      const actions = store.getActions();
      expect(actions[0].type).toEqual(fetchBlogDetail.pending.type);
      expect(actions[1].type).toEqual(fetchBlogDetail.rejected.type);
      expect(actions[1].error.message).toEqual(errorMessage);
    });
  });

  describe('subscribe', () => {
    it('should handle subscribe pending', () => {
      const nextState = reducer(initialState, subscribe.pending());
      expect(nextState.loading).toBe(true);
      expect(nextState.subscribed).toBe(false);
      expect(nextState.error).toBe(null);
    });

    it('should handle subscribe fulfilled', async () => {
      axios.post.mockResolvedValueOnce({ data: {} });

      const store = mockStore(initialState);
      await act(async () => {
        await store.dispatch(subscribe('test@example.com'));
      });

      const actions = store.getActions();
      expect(actions[0].type).toEqual(subscribe.pending.type);
      expect(actions[1].type).toEqual(subscribe.fulfilled.type);
      expect(actions[1].payload).toEqual(undefined);
    });

    it('should handle subscribe rejected', async () => {
      const errorMessage = 'Error subscribing';
      axios.post.mockRejectedValueOnce(new Error(errorMessage));

      const store = mockStore(initialState);
      await act(async () => {
        await store.dispatch(subscribe('test@example.com'));
      });

      const actions = store.getActions();
      expect(actions[0].type).toEqual(subscribe.pending.type);
      expect(actions[1].type).toEqual(subscribe.rejected.type);
      expect(actions[1].error.message).toEqual(errorMessage);
    });
  });
});
