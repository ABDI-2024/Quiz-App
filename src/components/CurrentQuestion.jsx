import { useContext, useRef, useState } from "react";
import { QuizContext } from "../App";

export default function CurrentQuestion({ questions, length }) {
  const { id, question, options } = questions;
  const { currentQuestion, setCurrentQuestion } = useContext(QuizContext);

  const [isAnswered, setIsAnswered] = useState(false);
  const [userAnswer, setUserAnswer] = useState({});
  function handleAnswers(id) {
    if (!isAnswered) {
      console.log(isAnswered);

      setUserAnswer(options.find((t) => t.label === id));
      setIsAnswered(true);
    }
  }

  return (
    <>
      <div className="question">{question}</div>

      <div className="options">
        {options.map((op) => {
          return (
            <div key={op.label} className="option" onClick={() => handleAnswers(op.label)}>
              <div className="option-label">{op.label}</div>
              <div className="option-text">{op.text}</div>
            </div>
          );
        })}
      </div>

      <div className="quiz-controls">
        <div className="progress">{currentQuestion + 1} of 10 questions</div>
        <button
          className="btn btn-secondary"
          onClick={() => {
            setCurrentQuestion((pre) => {
              return pre + 1;
            });
          }}>
          Next
        </button>
      </div>
    </>
  );
}
