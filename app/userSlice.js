import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userInfo: {
    name: 'Sumit Makker',
    email: 'sumitmakker4gmail.com',
    profilePic: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const {setUserInfo} = userSlice.actions;

export default userSlice.reducer;
