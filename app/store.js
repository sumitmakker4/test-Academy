import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../app/authSlice';
import notificationReducer from '../app/notificationSlice';
import userReducer from '../app/userSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    notification: notificationReducer,
    user: userReducer,
  },
});
