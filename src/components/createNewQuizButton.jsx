import React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PropTypes from "prop-types";

export default function NewButtonQuiz(props) {
  const { openModal, handleClose, handleTitle, text, close, opener, submit } =
    props;
  return (
    <div>
      <Button variant="contained" onClick={openModal}>
        <AddCircleIcon />
        Create new quiz
      </Button>
      <Dialog open={opener} onClose={handleClose}>
        <DialogTitle>Add new quiz</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Quiz title"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleTitle}
            value={text}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancel</Button>
          <Button onClick={submit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
NewButtonQuiz.propTypes = {
  openModal: PropTypes.func,
  handleClose: PropTypes.func,
  handleTitle: PropTypes.func,
  text: PropTypes.string,
  close: PropTypes.func,
  opener: PropTypes.bool,
  submit: PropTypes.func,
};
