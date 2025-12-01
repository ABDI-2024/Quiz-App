import { createContext, useEffect, useRef, useState } from "react";
import "./styles.css";
import StartScreen from "./StartScreen";
import QuizScreen from "./QuizScreen";
import qustions from "./questions.json";

export const QuizContext = createContext();

export default function App() {
  const [score, setScore] = useState({ correct: 0, wrong: 0 });

  const [startQuiz, setStartQuiz] = useState(false);
  const questionList = useRef(qustions);

  return (
    <QuizContext value={{ score, setScore }}>
      <div className="page-section">
        {startQuiz ? (
          <QuizScreen questionList={questionList.current} setStartQuiz={setStartQuiz} />
        ) : (
          <StartScreen questionList={questionList.current} setStartQuiz={setStartQuiz} />
        )}
      </div>
    </QuizContext>
  );
}
