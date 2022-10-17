import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewQuiz, deleteQuestion } from "../redux/actions/actions";
import NewButtonQuiz from "../components/createNewQuizButton";
import Navbar from "../components/nav";
import {
  Box,
  List,
  ListItem,
  IconButton,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

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
        return (
          <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
            <Grid container spacing={2}>
              <Grid item>
                <Typography
                  sx={{ mt: 4, mb: 2 }}
                  variant="h6"
                  component="div"
                  key={quiz.id}
                >
                  {quiz.title}
                </Typography>
                <List>
                  {quiz.questions.map((question) => {
                    return (
                      <ListItem>
                        <Typography variant="h6" component="h2">
                          {question}
                        </Typography>
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => {
                            handleDelete(quiz.id, question);
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Grid>
            </Grid>
          </Box>
        );
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
