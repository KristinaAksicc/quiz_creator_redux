import { ListItem, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function QuizListItems(props) {
  const { question, delQuestion } = props;
  return (
    <ListItem>
      <Typography variant="h6" component="h2">
        {question}
      </Typography>
      <IconButton edge="end" aria-label="delete" onClick={delQuestion}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}
