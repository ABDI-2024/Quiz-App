import { useContext } from "react";
import { QuizContext } from "../App";

export default function Start({ setStartGame, setStartQuestions }) {
  const { questionList } = useContext(QuizContext);
  return (
    <>
      <div className="quiz-container">
        <div className="start-screen">
          <h2>General Knowledge Quiz</h2>
          <p>Test your knowledge with our simple quiz app</p>

          <div className="quiz-info">
            <div className="info-item">
              <div className="info-number">{questionList.length}</div>
              <div className="info-label">Questions</div>
            </div>
            <div className="info-item">
              <div className="info-number">15</div>
              <div className="info-label">Minutes</div>
            </div>
            <div className="info-item">
              <div className="info-number">Easy</div>
              <div className="info-label">Difficulty</div>
            </div>
          </div>

          <button
            className="btn btn-primary"
            onClick={() => {
              setStartGame((pre) => false);
              setStartQuestions(() => true);
            }}>
            Start Quiz
          </button>
        </div>
      </div>
    </>
  );
}
