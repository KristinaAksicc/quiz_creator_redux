import * as types from "../actions/types";

const initialState = {
  allQuestions: [],
};

export const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_QUESTIONS:
      return {
        ...state,
        allQuestions: action.payload,
      };

    default:
      return state;
  }
};
