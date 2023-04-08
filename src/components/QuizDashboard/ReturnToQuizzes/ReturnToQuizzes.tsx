import { BsArrowReturnLeft } from 'react-icons/bs';

export const ReturnToQuizzes = () => {
    return (
        <button className="mx-auto mb-6 px-4 py-1 border border-[#dbdbdb] rounded-md text-2xl hover:bg-[#f8f8f8] transition-colors" aria-label="Return to all quizzes">
            <BsArrowReturnLeft />
        </button>
    );
};
