import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

enum ModeTypes {
  Increase = 'INCREASE',
  Decrease = 'DECREASE',
}

type FormState = {
  objectsAmount: number;
  values: number | string;
  mode: ModeTypes;
};

const initialState = {
  objectsAmount: 2,
  values: 'A',
  mode: ModeTypes.Increase,
} as FormState;

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    change(
      state,
      {
        payload: { key, value },
      }: PayloadAction<{ key: string; value: number | string | ModeTypes }>
    ) {
      state[key] = value;
    },
  },
});

export const { change } = formSlice.actions;
