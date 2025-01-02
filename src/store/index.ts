import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import donationRequestsReducer from './slices/donationRequestsSlice';
import appointmentReducer from './slices/appointmentSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    donationRequests: donationRequestsReducer,
    appointments: appointmentReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;