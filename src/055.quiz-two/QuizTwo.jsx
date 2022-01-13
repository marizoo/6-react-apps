import React, {useState} from 'react'
import './quizTwoStyle.css'

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


const QuizTwo = () => {

    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleAnswerButton = (isCorrect) => {
        if(isCorrect === true) {setScore(score + 1)}

        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {setShowScore(true)}
    }

    return (
        <div className='quizTwo'>
              {showScore && (<h2 className='quizTwo__questions__question'>You score {score} out of {questions.length}</h2>
           )}
           {!showScore && (
               <>
               <div className="quizTwo__questions">
                <span className='quizTwo__questions__numbers'>Question {currentQuestion + 1} / {questions.length}</span>
                <h2 className='quizTwo__questions__question'>{questions[currentQuestion].questionText}</h2>
            </div>
            <div className="quizTwo__answers">
                {questions[currentQuestion].answerOptions.map(answerOption => (

                <button 
                className='quizTwo__answers__button'
                onClick={() => handleAnswerButton(answerOption.isCorrect)}
                >
                    {answerOption.answerText}</button>
                ))}
            </div>
               </>
           )}
            
        </div>
    )
}

export default QuizTwo
