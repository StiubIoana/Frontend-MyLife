import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Challenge, ChallengeState } from "./challengeSlice.types";

const initialState: ChallengeState = {
  challengeToUpdate: {
    id: "",
    title: "",
    description: "",
  },
};

export const challengeSlice = createSlice({
  name: "challenge",
  initialState: initialState,
  reducers: {
    setChallengeToUpdate: (state, action: PayloadAction<Challenge>) => {
      state.challengeToUpdate = action.payload;
    },
  },
});

export const { setChallengeToUpdate } = challengeSlice.actions;

export const challengeReducer = challengeSlice.reducer; // Export the reducer.
