import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userInfo: {
    name: 'Sumit Makker',
    email: 'sumitmakker4gmail.com',
    profilePic:
      'https://media.pitchfork.com/photos/62043c007db00b3b97548cb5/1:1/w_1000,h_1000,c_limit/Snoop%20Dogg.jpg',
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
