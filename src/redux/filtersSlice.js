import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "" 
  },

  reducers: {
    filtersContact: (state, action) => {
      state.items = state.items.filter((contact) => {
        contact.name === action.payload
      })
  }
  
}


});



export default filtersSlice.reducer;

