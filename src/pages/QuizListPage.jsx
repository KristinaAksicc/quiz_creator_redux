import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewQuiz, deleteQuestion } from "../redux/actions/actions";
import NewButtonQuiz from "../components/CreateNewQuizButton";
import Navbar from "../components/Nav";
import QuizTitles from "../components/QuizTitles";
import { Button } from "@mui/material";

export default function QuizListPage() {
  const { quizzes } = useSelector((state) => ({
    ...state.quizzes,
  }));

  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("quiz")) {
      setData(JSON.parse(localStorage.getItem("quiz")));
    }
  }, [quizzes]);

  const handleTitle = (e) => setTitle(e.target.value);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAddNewQuiz = (title) => {
    dispatch(addNewQuiz(title));
  };

  const handleDelete = (id, question) => {
    const quiz = quizzes.find((quiz) => quiz.id === id);
    dispatch(deleteQuestion({ quiz: quiz, question: question }));
  };

  const handleSaveToLS = () => {
    localStorage.setItem("quiz", JSON.stringify(quizzes));
  };

  return (
    <>
      <Navbar />
      <NewButtonQuiz
        opener={open}
        openModal={() => {
          handleClickOpen();
        }}
        handleClose={() => handleClose()}
        handleTitle={(e) => handleTitle(e)}
        text={title}
        submit={() => {
          handleAddNewQuiz(title);
          handleClose();
        }}
        close={() => handleClose()}
      />
      {(data.length ? data : quizzes).map((quiz) => {
        return <QuizTitles quiz={quiz} handleDelete={handleDelete} />;
      })}
      <Button
        variant="contained"
        sx={{ ml: "40%" }}
        onClick={() => handleSaveToLS()}
      >
        Save Quizzes
      </Button>
    </>
  );
}
