import { createAction } from "@reduxjs/toolkit";

export const addUserId = createAction("addUserId");
export const addUsername = createAction("addUsername");
export const addFirstname = createAction("addFirstname");
export const addLastname = createAction("addLastname");
export const addEmail = createAction("addEmail");
export const addPassword = createAction("addPassword");
export const addPasswordConfirmation = createAction("addPasswordConfirmation");
export const addProfession = createAction("addProfession");
export const addPrerregistered = createAction("addPrerregistered");
export const fromMobile = createAction("fromMobile");

const types = {
  addUserId,
  addUsername,
  addFirstname,
  addLastname,
  addEmail,
  addPassword,
  addPasswordConfirmation,
  addProfession,
  addPrerregistered,
  fromMobile,
};

export default types;
