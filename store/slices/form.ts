import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../instance';
import { StepT } from 'types';

interface FormState {
  kind: Array<string>;
  gender: Array<string>;
  age: Array<string>;
  diseases: Array<string>;
  language: Array<string>;
  step: number;
}

type FormPayload = {
  type: StepT;
  data: Array<string>;
};

const inistialState: FormState = {
  kind: [],
  gender: [],
  age: [],
  diseases: [],
  language: [],
  step: 0,
};

const formSlice = createSlice({
  name: 'formData',
  initialState: inistialState,
  reducers: {
    formDataChange: (state, action: PayloadAction<FormPayload>) => {
      state[action.payload.type] = action.payload.data;
    },
    formStepChange: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
  },
});

export const { formDataChange, formStepChange } = formSlice.actions;
export const selectForm = (state: RootState) => state.form;

export default formSlice.reducer;
