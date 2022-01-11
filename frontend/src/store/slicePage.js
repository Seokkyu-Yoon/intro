import { createSlice } from '@reduxjs/toolkit';

export const slicePage = createSlice({
  name: 'page',
  initialState: {
    value: '소개',
  },
  reducers: {
    setIntroduce: (state) => {
      const value = '소개';
      Object.assign(state, { value });
    },
    setCareer: (state) => {
      const value = '경력';
      Object.assign(state, { value });
    },
  },
});

export const { setIntroduce, setCareer } = slicePage.actions;

export default slicePage.reducer;
