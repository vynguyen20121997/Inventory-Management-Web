// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   isAuthenticated: false,
//   error: null,

//   fetchCurrentUserPending: false,
//   fetchCurrentUserError: null,
//   currentUser: {},
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     login: (state, { payload }) => {
//       state.isAuthenticated = true;
//       state.currentUser = payload;
//     },
//     logout: (state) => {
//       localStorage.removeItem('accessToken');
//       state.isAuthenticated = false;
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;

// export default authSlice.reducer;
