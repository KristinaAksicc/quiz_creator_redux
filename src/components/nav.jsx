import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import { Box, Toolbar, Button } from "@mui/material";

const linkStyle = {
  textDecoration: "none",
  color: "white",
};

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, mb: 9 }}>
      <AppBar position="static">
        <Toolbar>
          <Button variant="text">
            <Link to="/" style={linkStyle}>
              Quiz Page
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/QuizListPage" style={linkStyle}>
              Create Quiz
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
