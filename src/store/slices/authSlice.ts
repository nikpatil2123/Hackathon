import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const users = {
  'admin': {
    id: '0',
    email: 'admin',
    name: 'Administrator',
    points: 0,
    donationHistory: [],
    isAdmin: true
  },
  'nikpatil2123@gmail.com': {
    id: '2',
    email: 'nikpatil2123@gmail.com',
    name: 'Nik Patil',
    points: 0,
    donationHistory: [],
    isAdmin: false
  },
  'hospital@gmail.com': {
    id: '3',
    email: 'hospital@gmail.com',
    name: 'City Hospital',
    points: 0,
    donationHistory: [],
    isAdmin: false,
    isHospital: true
  },
  'ngo@gmail.com': {
    id: '4',
    email: 'ngo@gmail.com',
    name: 'Blood Donors NGO',
    points: 0,
    donationHistory: [],
    isAdmin: false,
    isNGO: true
  }
};

const initialState = {
  isAuthenticated: false,
  user: null as any,
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<{ email: string }>) => {
      const { email } = action.payload;
      state.isAuthenticated = true;
      state.user = users[email];
    },
    loginFailure: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    addDonation: (state, action: PayloadAction<{ donation: any }>) => {
      if (state.user) {
        state.user.donationHistory.push(action.payload.donation);
        state.user.points += 10;
      }
    },
  },
});

export const { loginSuccess, loginFailure, logout, addDonation } = authSlice.actions;

export const login = (credentials: { email: string; password: string }) => (dispatch: any) => {
  const { email, password } = credentials;
  
  if ((email === 'nikpatil2123@gmail.com' && password === '1234') || 
      (email === 'admin' && password === 'admin') ||
      (email === 'hospital@gmail.com' && password === 'hos@123') ||
      (email === 'ngo@gmail.com' && password === 'NGO@123')) {
    dispatch(loginSuccess({ email }));
    return true;
  } else {
    dispatch(loginFailure());
    return false;
  }
};

export default authSlice.reducer;
