import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isEnabled: false,
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setIsToEnable: (state, action) => {
      state.isEnabled = action.payload;
    },
  },
});

export const {setIsToEnable} = notificationSlice.actions;

export default notificationSlice.reducer;
