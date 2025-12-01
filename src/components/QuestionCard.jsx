import { useContext, useState } from "react";
import { QuizContext } from "../App";

export default function QuestionCard({
  wholeQuestion: { question, options },
  userAnswer,
  setUserAnswer,
  showAnswer,
  setShowAnswer,
}) {
  const { setScore } = useContext(QuizContext);

  function handleAnswering({ label, isCorrect }) {
    if (!showAnswer) {
      setUserAnswer({ label });
      setShowAnswer(true);

      if (isCorrect) {
        setScore((prev) => ({
          ...prev,
          correct: prev.correct + 1,
        }));
      } else {
        setScore((prev) => ({
          ...prev,
          wrong: prev.wrong + 1,
        }));
      }
    }
  }

  return (
    <>
      <div className="question">{question}</div>

      <div className="options">
        {options.map((option) => {
          return (
            <div
              className={`option ${
                userAnswer?.label === option.label ? (option.isCorrect ? "correct" : "wrong") : ""
              } 
              
              ${showAnswer && option.isCorrect ? "correct" : ""}
              `}
              key={option.label}
              onClick={() => handleAnswering(option)}>
              <div className="option-label">{option.label}</div>
              <div className="option-text">{option.text}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
