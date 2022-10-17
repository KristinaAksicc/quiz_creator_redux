import { combineReducers } from "redux";
import { questionReducer } from "./questionReducer";
import { quizReducer } from "./quizReducer";

const rootReducer = combineReducers({
  questions: questionReducer,
  quizzes: quizReducer,
});

export default rootReducer;
