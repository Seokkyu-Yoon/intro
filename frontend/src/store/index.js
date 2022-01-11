import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './slicePage';

export default configureStore({
  reducer: {
    page: pageReducer,
  },
});
