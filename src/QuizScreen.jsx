import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { QuizContext } from "./App";

export default function QuizScreen({ questionList, setStartQuiz }) {
  const [endQuiz, setEndQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [userAnswer, setUserAnswer] = useState({});
  const [showAnswer, setShowAnswer] = useState(false);

  const { score, setScore } = useContext(QuizContext);

  return (
    <div className="quiz-container">
      {endQuiz ? (
        <>
          <div className="results-screen">
            <h2>Quiz Complete!</h2>
            <div className="score">
              {score.correct}/{questionList.length}
            </div>
            <p className="score-message">
              Great job! You got {(score.correct / questionList.length) * 100}% of the questions
              right.
            </p>

            <div className="score-details">
              <div className="detail-item">
                <div className="detail-number correct">{score.correct}</div>
                <div className="detail-label">Correct</div>
              </div>
              <div className="detail-item">
                <div className="detail-number wrong">{score.wrong}</div>
                <div className="detail-label">Wrong</div>
              </div>
            </div>

            <button
              className="btn btn-primary"
              onClick={() => {
                setScore({ correct: 0, wrong: 0 });
                setStartQuiz((pre) => !pre);
              }}>
              Try Again
            </button>
          </div>
        </>
      ) : (
        <>
          <QuestionCard
            wholeQuestion={questionList[currentQuestion]}
            userAnswer={userAnswer}
            setUserAnswer={setUserAnswer}
            showAnswer={showAnswer}
            setShowAnswer={setShowAnswer}
          />
          <div className="quiz-controls">
            <div className="progress">
              {currentQuestion + 1} of {questionList.length} questions
            </div>
            <button
              className="btn btn-secondary"
              onClick={() => {
                setCurrentQuestion((pre) => pre + 1);
                setUserAnswer({});
                setShowAnswer(false);

                if (currentQuestion + 1 === questionList.length) {
                  setEndQuiz(true);
                }
              }}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
