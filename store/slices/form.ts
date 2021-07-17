import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../instance';
import { StepT } from 'types';

interface FormState {
  kind: Array<string>;
  gender: Array<string>;
  age: Array<string>;
  diseases: Array<string>;
  language: Array<string>;
}

type FormPayload = {
  type: StepT;
  data: string | Array<string>;
};

const inistialState: FormState = {
  kind: [],
  gender: [],
  age: [],
  diseases: [],
  language: [],
};

const formSlice = createSlice({
  name: 'formData',
  initialState: inistialState,
  reducers: {
    formDataChange: (state, action: PayloadAction<FormPayload>) => {
      state[action.payload.type] = action.payload.data;
    },
  },
});

export const { formDataChange } = formSlice.actions;
export const selectForm = (state: RootState) => state.form;

export default formSlice.reducer;
