import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getQuizQuestions } from "../redux/actions/actions";
import { addQuestionToQuiz } from "../redux/actions/actions";
import QuestionCards from "../components/questionCards";
import AnswerButtons from "../components/answersButtons";
import Navbar from "../components/nav";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Card,
  Grid,
} from "@mui/material";

export default function QuizPage() {
  const { allQuestions } = useSelector((state) => ({
    ...state.questions,
  }));
  const { quizzes } = useSelector((state) => ({
    ...state.quizzes,
  }));
  const [open, setOpen] = useState(false);
  const [questions, setQuestions] = useState(allQuestions);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getQuizQuestions());
  }, [dispatch]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleNavigate = () => {
    navigate("/QuizListPage");
  };
  const addQuestion = (questionId) => {
    const question = allQuestions.find(
      (question) => question.id === questionId
    );
    setQuestions(question.question);
  };
  const chooseQuiztoAdd = (id) => {
    const quiz = quizzes.find((quiz) => quiz.id === id);
    dispatch(addQuestionToQuiz({ quiz: quiz, questions: questions }));
  };

  const correct = (e) => {
    e.preventDefault();
    e.target.style.backgroundColor = "green";
  };
  const incorrect = (e) => {
    e.preventDefault();
    e.target.style.backgroundColor = "red";
  };

  return (
    <>
      <Navbar />
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "35px",
        }}
      >
        {allQuestions.map((question) => {
          return (
            <Card sx={{ width: 900 }}>
              <QuestionCards key={question.id} question={question.question} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  marginBottom: "20px",
                }}
              >
                {question.allAnswers.map((answ) => {
                  return (
                    <AnswerButtons
                      key={answ.id}
                      answerText={answ.answerText}
                      ifCorrect={answ.isCorrect ? correct : incorrect}
                    />
                  );
                })}
              </div>
              <div>
                <Button
                  variant="contained"
                  onClick={() => {
                    handleClickOpen();
                    addQuestion(question.id);
                  }}
                  color="secondary"
                >
                  Add to quiz
                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    Select quiz you want to add this question or create new one
                  </DialogTitle>
                  <DialogContent>
                    {quizzes.map((quiz) => (
                      <Button
                        key={quiz.id}
                        variant="text"
                        onClick={() => {
                          chooseQuiztoAdd(quiz.id);
                          handleClose();
                        }}
                      >
                        {quiz.title}
                      </Button>
                    ))}
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    <Button
                      onClick={() => {
                        handleClose();
                        handleNavigate();
                      }}
                      autoFocus
                    >
                      Create new quiz
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            </Card>
          );
        })}
      </Grid>
    </>
  );
}
