import { configureStore, createSlice } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    page: createSlice({
      name: 'page',
      initialState: '소개',
      reduces: {
        setIntroduce: (state) => {
          const value = '소개';
          Object.assign(state, { value });
        },
        setCareer: (state) => {
          const value = '경력';
          Object.assign(state, { value });
        },
      },
    }),
  },
});
