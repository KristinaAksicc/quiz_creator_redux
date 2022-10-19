import axios from "axios";
import * as types from "./types";

function getQuestions(allQuestions) {
  return {
    type: types.GET_QUESTIONS,
    payload: allQuestions,
  };
}

export function getQuizQuestions() {
  return function (dispatch) {
    axios
      .get("https://the-trivia-api.com/api/questions?limit=5")
      .then((response) => {
        const questions = response.data;
        const allQuestions = questions.map((answ) => {
          return {
            ...answ,
            allAnswers: [
              { answerText: answ.correctAnswer, isCorrect: true },
              ...answ.incorrectAnswers.map((wrongAnsw) => {
                return { answerText: wrongAnsw, isCorrect: false };
              }),
            ],
          };
        });
        dispatch(getQuestions(allQuestions));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function addNewQuiz(payload) {
  return {
    type: types.CREATE_NEW_QUIZ,
    payload,
  };
}

export function addQuestionToQuiz(payload) {
  return {
    type: types.ADD_QUESTION_TO_CHOOSEN_QUIZ,
    payload,
  };
}

export function deleteQuestion(payload) {
  return {
    type: types.REMOVE_QUESTION_FROM_QUIZ,
    payload,
  };
}
