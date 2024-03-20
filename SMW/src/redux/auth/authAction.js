// import { createAsyncThunk } from "@reduxjs/toolkit";
// import AuthAPI from "../../services/StartingPage/AuthAPI";

// // Types
// const FETCH_CURRENT_USER = "auth/me";

// // Async actions
// export const fetchCurrentUser = createAsyncThunk(
//   FETCH_CURRENT_USER,
//   async (payload, { rejectWithValue, fulfillWithValue }) => {
//     try {
//       const currentUserResponse = await AuthAPI.currentUser();
//       const currentUser = currentUserResponse.data;

//       return fulfillWithValue(currentUser);
//     } catch (error) {
//       console.log("fetch-current-user-failed:", error);
//       rejectWithValue(error);
//     }
//   }
// );
