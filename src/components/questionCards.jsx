import { CardContent, Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function QuestionCards(props) {
  const { question } = props;
  return (
    <>
      <CardContent>
        <Typography variant="h5" sx={{ textAlign: "center", mb: "20px" }}>
          {question}
        </Typography>
      </CardContent>
    </>
  );
}

QuestionCards.propTypes = {
  question: PropTypes.string,
};
