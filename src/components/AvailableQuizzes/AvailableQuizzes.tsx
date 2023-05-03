import availableQuizzesList from '@/data/availableQuizzes.json';
import { QuizContext } from '@/contexts/QuizContext/QuizContext';
import { QuizDashboard } from '@components/QuizDashboard/QuizDashboard';
import { AvailableQuiz } from './AvailableQuiz';
import { useContext } from 'react';

enum Quizzes {
    Html = 'html',
    Css = 'css',
    Javascript = 'javascript',
    Sass = 'sass',
    Population = 'population',
    Flags = 'flags'
}

const getValidQuizName = (quizName: string) =>
    Object.values(Quizzes).find(possibleQuizName => possibleQuizName === quizName);

export const AvailableQuizzes = () => {
    const { updateCurrentQuizName, isQuizStarted } = useContext(QuizContext);

    const pickQuizHandler = ({ target }: React.MouseEvent) => {
        if (!(target instanceof Element)) return;
        const quizNameHeading = target.closest('button')?.closest('li')?.querySelector('h2');
        const quizName = quizNameHeading?.textContent?.trim().toLowerCase();
        const validQuizName = quizName && getValidQuizName(quizName);
        if (validQuizName) updateCurrentQuizName(validQuizName);
    };
    return (
        <>
            {!isQuizStarted ? (
                <ul onClick={pickQuizHandler} className="mt-8 mb-4 max-w-[95%] mx-auto quiz-container">
                    {availableQuizzesList.map(quizInfo => (
                        <AvailableQuiz key={quizInfo.title} {...quizInfo} />
                    ))}
                </ul>
            ) : (
                <QuizDashboard />
            )}
        </>
    );
};
