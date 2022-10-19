import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizListPage from "./pages/QuizListPage";
import QuizPage from "./pages/QuizPage";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<QuizPage />}></Route>
          <Route exact path="/QuizListPage" element={<QuizListPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
