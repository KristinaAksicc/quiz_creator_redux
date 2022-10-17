import { CardActions, Button } from "@mui/material";
import PropTypes from "prop-types";

export default function AnswerButtons(props) {
  const { answerText, ifCorrect } = props;
  return (
    <CardActions sx={{ display: "flex", justifyContent: "center" }}>
      <Button size="small" variant="contained" onClick={ifCorrect}>
        {answerText}
      </Button>
    </CardActions>
  );
}
AnswerButtons.propTypes = {
  answerText: PropTypes.string,
  ifCorrect: PropTypes.func,
};
