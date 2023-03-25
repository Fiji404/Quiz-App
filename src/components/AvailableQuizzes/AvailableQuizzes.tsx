import availableQuizes from '../../data/availableQuizzes.json';
import { AvailableQuiz } from './AvailableQuiz';
import { useContext } from 'react';
import { QuizContext } from '../../contexts/QuizContext/QuizContext';
import { QuizDashboard } from '../QuizDashboard/QuizDashboard';

type CardIndexes = 0 | 1 | 2 | 3 | 4 | 5;

export const AvailableQuizzes = () => {
    const { quizSelectionHandler, currentQuizName, isQuizStarted } = useContext(QuizContext);

    return (
        <>
            {!isQuizStarted ? (
                <ul
                    onClick={quizSelectionHandler}
                    className="mt-8 max-w-[95%] mx-auto quiz-container"
                >
                    {availableQuizes.map((props, i) => (
                        <AvailableQuiz key={props.title} currentCard={i as CardIndexes} {...props} />
                    ))}
                </ul>
            ) : (
                <QuizDashboard currentQuizName={currentQuizName} />
            )}
        </>
    );
};
