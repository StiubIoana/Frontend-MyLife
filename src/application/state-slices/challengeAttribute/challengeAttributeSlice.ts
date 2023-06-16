import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  ChallengeAttribute,
  ChallengeAttributeState,
} from "./challengeAttributeSlice.types";

const initialState: ChallengeAttributeState = {
  challengeAttributeToUpdate: {
    id: "",
    name: "",
    points: 0,
  },
};

export const challengeAttributeSlice = createSlice({
  name: "challengeAttribute",
  initialState: initialState,
  reducers: {
    setChallengeAttributeToUpdate: (
      state,
      action: PayloadAction<ChallengeAttribute>
    ) => {
      state.challengeAttributeToUpdate = action.payload;
    },
  },
});

export const { setChallengeAttributeToUpdate } =
  challengeAttributeSlice.actions;

export const challengeAttributeReducer = challengeAttributeSlice.reducer; // Export the reducer.
