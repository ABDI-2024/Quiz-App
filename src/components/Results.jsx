export default function Result() {
  return (
    <>
      <div className="results-screen">
        <h2>Quiz Complete!</h2>
        <div className="score">8/10</div>
        <p className="score-message">Great job! You got 80% of the questions right.</p>

        <div className="score-details">
          <div className="detail-item">
            <div className="detail-number correct">8</div>
            <div className="detail-label">Correct</div>
          </div>
          <div className="detail-item">
            <div className="detail-number wrong">2</div>
            <div className="detail-label">Wrong</div>
          </div>
          <div className="detail-item">
            <div className="detail-number">12:45</div>
            <div className="detail-label">Time Taken</div>
          </div>
        </div>

        <button className="btn btn-primary">Try Again</button>
      </div>
    </>
  );
}
