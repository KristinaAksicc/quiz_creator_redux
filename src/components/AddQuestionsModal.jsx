import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

export default function AddQuestionsModal(props) {
  const {
    quizzes,
    opener,
    openModal,
    close,
    create,
    chooseQuiztoAdd,
    handleClose,
  } = props;
  return (
    <div>
      <Button variant="contained" onClick={openModal} color="secondary">
        Add to quiz
      </Button>
      <Dialog
        open={opener}
        onClose={close}
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
          <Button onClick={close}>Close</Button>
          <Button onClick={create} autoFocus>
            Create new quiz
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
