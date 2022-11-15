import {createSlice} from '@reduxjs/toolkit';
import NetInfo from '@react-native-community/netinfo';

function getInternetSatus() {
  NetInfo.addEventListener(state => {
    return state.isConnected;
  });
}

const initialState = {
  isOnline: getInternetSatus(),
};

export const internetSlice = createSlice({
  name: 'internet',
  initialState,
  reducers: {
    setIsOnline: (state, action) => {
      state.isOnline = action.payload;
    },
  },
});

export const {setIsOnline} = internetSlice.actions;

export default internetSlice.reducer;
