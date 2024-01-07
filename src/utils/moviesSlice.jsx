import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    tvShowsAiring: null,
    trendingMovies: null,
    trendingTvShows: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMoives: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addTopRatedMoives: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTvShowsAiring: (state, action) => {
      state.tvShowsAiring = action.payload;
    },
    addTrendingTvShows: (state, action) => {
      state.trendingTvShows = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrendingMovies,
  addTrailerVideo,
  addPopularMoives,
  addTopRatedMoives,
  addUpcomingMovies,
  addTvShowsAiring,
  addTrendingTvShows,
} = moviesSlice.actions;
export default moviesSlice.reducer;
