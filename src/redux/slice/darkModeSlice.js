// redux/darkModeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: false, // Default to light mode
};

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode; // Toggle the dark mode state
    },
    setDarkMode: (state, action) => {
      state.isDarkMode = action.payload; // Set dark mode based on the payload
    },
  },
});

// Export actions
export const { toggleDarkMode, setDarkMode } = darkModeSlice.actions;

// Export the reducer
export default darkModeSlice.reducer;
