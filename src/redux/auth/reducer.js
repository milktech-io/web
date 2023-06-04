import { createReducer } from "@reduxjs/toolkit";
import types from "./actionTypes";

const initialState = {
  prerregistered: false,
  username: "",
  sponsor: "",
  name: "",
  lastname: "",
  profession: "",
  email: "",
  password: "",
  password_confirmation: "",
  fromMobile: false,
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(types.addUserId, (state, action) => {
      state.sponsor = action.payload;
    })
    .addCase(types.addUsername, (state, action) => {
      state.username = action.payload;
    })
    .addCase(types.addFirstname, (state, action) => {
      state.name = action.payload;
    })
    .addCase(types.addLastname, (state, action) => {
      state.lastname = action.payload;
    })
    .addCase(types.addProfession, (state, action) => {
      state.profession = action.payload;
    })
    .addCase(types.addEmail, (state, action) => {
      state.email = action.payload;
    })
    .addCase(types.addPassword, (state, action) => {
      state.password = action.payload;
    })
    .addCase(types.addPasswordConfirmation, (state, action) => {
      state.password_confirmation = action.payload;
    })
    .addCase(types.addPrerregistered, (state, action) => {
      state.prerregistered = action.payload;
    })
    .addCase(types.fromMobile, (state, action) => {
      state.fromMobile = action.payload;
    });
});
