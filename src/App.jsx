import { createContext, useState } from "react";
import "./styles.css";

import Start from "./components/Start";
import QuestionCards from "./components/QuestionCards";
import Result from "./components/Results";
import questions from "./questions.json";

export const QuizContext = createContext();

export default function App() {
  const [startGame, setStartGame] = useState(true);
  const [startQuestions, setStartQuestions] = useState(false);

  const [questionList, setQuestionList] = useState(() => {
    return questions;
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <QuizContext value={{ questionList, currentQuestion, setCurrentQuestion }}>
      <div className="page-section">
        {startGame && <Start setStartGame={setStartGame} setStartQuestions={setStartQuestions} />}

        {startQuestions && <QuestionCards />}
      </div>
    </QuizContext>
  );
}
