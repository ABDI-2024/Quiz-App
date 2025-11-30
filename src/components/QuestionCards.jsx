import { useContext, useState } from "react";
import questions from "../questions.json";
import CurrentQuestion from "./CurrentQuestion";
import { QuizContext } from "../App";
import Result from "./Results";

export default function QuestionCards() {
  const { questionList, currentQuestion } = useContext(QuizContext);

  return (
    <>
      <div className="quiz-container">
        {questionList.length === currentQuestion ? (
          <Result />
        ) : (
          <CurrentQuestion questions={questionList[currentQuestion]} length={questionList.length} />
        )}
      </div>
    </>
  );
}
