import React, {useState} from 'react';
import './aQuizStyle.css'

const questions = [
    {
        questionText: 'What is the capital of France?',
        answerOptions: [
            { answerText: 'New York', isCorrect: false },
            { answerText: 'London', isCorrect: false },
            { answerText: 'Paris', isCorrect: true },
            { answerText: 'Dublin', isCorrect: false },
        ],
    },
    {
        questionText: 'Who is CEO of Tesla?',
        answerOptions: [
            { answerText: 'Jeff Bezos', isCorrect: false },
            { answerText: 'Elon Musk', isCorrect: true },
            { answerText: 'Bill Gates', isCorrect: false },
            { answerText: 'Tony Stark', isCorrect: false },
        ],
    },
    {
        questionText: 'The iPhone was created by which company?',
        answerOptions: [
            { answerText: 'Apple', isCorrect: true },
            { answerText: 'Intel', isCorrect: false },
            { answerText: 'Amazon', isCorrect: false },
            { answerText: 'Microsoft', isCorrect: false },
        ],
    },
    {
        questionText: 'How many Harry Potter books are there?',
        answerOptions: [
            { answerText: '1', isCorrect: false },
            { answerText: '4', isCorrect: false },
            { answerText: '6', isCorrect: false },
            { answerText: '7', isCorrect: true },
        ],
    },
];


const AQuiz = () => {
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleAnswerButton = (isCorrect) => {
        if(isCorrect === true) {
            setScore(score + 1)
        }

        const nextQuestion = currentQuestion + 1
        if(nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
        } else {
            setShowScore(true)
        }
    }

  return (
  <div className='aQuiz'>
            <div className="aQuiz__card">
                {!showScore && (
                    <>
                    <div className="aQuiz__card__title">Question {currentQuestion + 1}/{questions.length}.</div>
                    <div className="aQuiz__card__question">{questions[currentQuestion].questionText}</div>
                    <div className="aQuiz__card__answers">
                        {questions[currentQuestion].answerOptions.map(option => (
                            <button onClick={() => handleAnswerButton(option.isCorrect)} className='aQuiz__card__button'>{option.answerText}</button>
                        ))}
                    </div>
                    </>
                )}
                    {showScore && (
                        <div className="aQuiz__card__question">You scored {score}/{questions.length}</div>
                
                    )}
              </div>
            
      
  </div>
  )};

export default AQuiz;

