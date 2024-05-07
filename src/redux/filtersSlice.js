import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    contacts: {
      items: ['']
    }
  },

  reducers: {
    filtersContact: (state, action) => {
      state.items = state.items.filter((contact) => {
        contact.name === action.payload
      })
  }
  
}


});



export const {filtersContact} = filtersSlice.actions;

