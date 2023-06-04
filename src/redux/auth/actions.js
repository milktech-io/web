import types from "./actionTypes";

export const actionPrerregistered = (data) => {
  return async (dispatch) => {
    dispatch(types.addPrerregistered(data));
  };
};
export const actionUserId = (data) => {
  return async (dispatch) => {
    dispatch(types.addUserId(data));
  };
};

export const actionEmail = (data) => {
  return async (dispatch) => {
    dispatch(types.addEmail(data));
  };
};

export const actionUsername = (data) => {
  return async (dispatch) => {
    dispatch(types.addUsername(data));
  };
};

export const actionFirstname = (data) => {
  return async (dispatch) => {
    dispatch(types.addFirstname(data));
  };
};

export const actionLastname = (data) => {
  return async (dispatch) => {
    dispatch(types.addLastname(data));
  };
};

export const actionPassword = (data) => {
  return async (dispatch) => {
    dispatch(types.addPassword(data));
  };
};

export const actionConfirmPassword = (data) => {
  return async (dispatch) => {
    dispatch(types.addPasswordConfirmation(data));
  };
};

export const actionProfession = (data) => {
  return async (dispatch) => {
    dispatch(types.addProfession(data));
  };
};
