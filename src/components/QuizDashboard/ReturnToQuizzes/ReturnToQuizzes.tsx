import { QuizContext } from '@/contexts/QuizContext/QuizContext';
import { useContext } from 'react';
import { BsArrowReturnLeft } from 'react-icons/bs';

export const ReturnToQuizzes = () => {
    const { updateCurrentQuizName } = useContext(QuizContext);

    const ReturnToQuizzesHandler = () => {
        updateCurrentQuizName('');
    };

    return (
        <button
            className="mx-auto mb-6 px-4 py-1 border border-[#dbdbdb] rounded-md text-2xl hover:bg-[#f8f8f8] transition-colors"
            aria-label="Return to all quizzes"
            onClick={ReturnToQuizzesHandler}
        >
            <BsArrowReturnLeft />
        </button>
    );
};
