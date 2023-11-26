import React, { useState, useContext } from "react";
import { Questions } from "../Helpers/QuestionBank";
import { QuizContext } from "../Helpers/Context";

function Quiz() {
  const { score, setScore } = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const { gameState, setGameState } = useContext(QuizContext);

  const nextQuestion = () => {
    if (Questions[currQuestion].asnwer === optionChosen) {
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currQuestion].asnwer === optionChosen) {
      setScore(score + 1);
    }

    setGameState("endScreen");
  };
  return (
    <div className="Quiz">
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className="options">
        <button className="answerButton" onClick={() => setOptionChosen("A")}>
          {Questions[currQuestion].optionA}
        </button>
        <button className="answerButton" onClick={() => setOptionChosen("B")}>
          {Questions[currQuestion].optionB}
        </button>
        <button className="answerButton" onClick={() => setOptionChosen("C")}>
          {Questions[currQuestion].optionC}
        </button>
        <button className="answerButton" onClick={() => setOptionChosen("D")}>
          {Questions[currQuestion].optionD}
        </button>
      </div>
      {currQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz}> Finish Quiz </button>
      ) : (
        <button className="nextQuestionButton" onClick={nextQuestion}>
          Next Question
        </button>
      )}
    </div>
  );
}

export default Quiz;
