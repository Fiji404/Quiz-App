import availableQuizesList from '@/data/availableQuizzes.json';
import { QuizContext } from '@/contexts/QuizContext/QuizContext';
import { QuizDashboard } from '@components/QuizDashboard/QuizDashboard';
import { AvailableQuiz } from './AvailableQuiz';
import { useContext } from 'react';

export const AvailableQuizzes = () => {
    const { updateCurrentQuizName, currentQuizName, isQuizStarted } = useContext(QuizContext);

    const chooseQuizHandler = ({ target }: React.MouseEvent) => {
        if (!(target instanceof Element)) return;
        const quizNameHeading = target.closest('button')?.closest('li')?.querySelector('h2');
        const quizName = quizNameHeading?.textContent?.trim().toLowerCase();
        if (quizName && (quizName === 'html' || quizName === 'css' || quizName === 'javascript'))
            updateCurrentQuizName(quizName);
    };
    return (
        <>
            {!isQuizStarted && (
                <ul onClick={chooseQuizHandler} className="mt-8 mb-4 max-w-[95%] mx-auto quiz-container">
                    {availableQuizesList.map(props => (
                        <AvailableQuiz key={props.title} {...props} />
                    ))}
                </ul>
            )}
            {isQuizStarted && <QuizDashboard currentQuizName={currentQuizName} />}
        </>
    );
};
