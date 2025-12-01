export default function StartScreen({ setStartQuiz, questionList }) {
  return (
    <div className="quiz-container">
      <div className="start-screen">
        <h2>General Knowledge Quiz</h2>
        <p>Test your knowledge with our simple quiz app</p>

        <div className="quiz-info">
          <div className="info-item">
            <div className="info-number">{questionList.length}</div>
            <div className="info-label">Questions</div>
          </div>
        </div>
        <button className="btn btn-primary" onClick={() => setStartQuiz((pre) => !pre)}>
          Start Quiz
        </button>
      </div>
    </div>
  );
}
