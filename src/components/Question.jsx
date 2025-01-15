import { useState } from "react";

import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import QUESTIONS from "../questions.js";

export default function Question({ index, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      idVottrvy: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        idVottrvy: QUESTIONS[index].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer
        // 컴포넌트가 변경될 때 마다 컴포넌트가 목록의 일부가 아니더라도 변경될 때면
        // 언제든 오래된 컴포넌트 인스턴스를 삭제할 것이고 새로운것을 만들어 낼 것이기 때문, 그래서 삭제하고 재생성할 것이다.
        timeout={10000}
        onTimeout={onSkipAnswer}
      />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        // 컴포넌트가 변경될 때 마다 컴포넌트가 목록의 일부가 아니더라도 변경될 때면
        // 언제든 오래된 컴포넌트 인스턴스를 삭제할 것이고 새로운것을 만들어 낼 것이기 때문, 그래서 삭제하고 재생성할 것이다.
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
