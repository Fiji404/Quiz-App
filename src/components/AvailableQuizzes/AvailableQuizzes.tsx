import availableQuizesList from '@/data/availableQuizzes.json';
import { QuizContext } from '@/contexts/QuizContext/QuizContext';
import { QuizDashboard } from '@components/QuizDashboard/QuizDashboard';
import { AvailableQuiz } from './AvailableQuiz';
import { useContext } from 'react';

export const AvailableQuizzes = () => {
    const { quizSelectionHandler, currentQuizName, isQuizStarted } = useContext(QuizContext);

    return (
        <>
            {!isQuizStarted && (
                <ul onClick={quizSelectionHandler} className="mt-8 mb-4 max-w-[95%] mx-auto quiz-container">
                    {availableQuizesList.map(props => (
                        <AvailableQuiz key={props.title} {...props} />
                    ))}
                </ul>
            )}
            {isQuizStarted && <QuizDashboard currentQuizName={currentQuizName} />}
        </>
    );
};
