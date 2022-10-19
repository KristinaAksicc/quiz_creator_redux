import { Box, List, Grid, Typography } from "@mui/material";
import QuizListItems from "./QuizQuestions";

export default function QuizTitles(props) {
  const { quiz, handleDelete } = props;
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            {quiz.title}
          </Typography>
          <List>
            {quiz.questions.map((question) => {
              return (
                <QuizListItems
                  question={question}
                  delQuestion={() => handleDelete(quiz.id, question)}
                />
              );
            })}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
