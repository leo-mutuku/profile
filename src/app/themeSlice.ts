import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the available themes
export type ThemeMode = "light" | "dark";

// Define the initial state
interface ThemeState {
  mode: ThemeMode;
}

const initialState: ThemeState = {
  mode: "light", // Default theme
};

// Create the theme slice
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;
