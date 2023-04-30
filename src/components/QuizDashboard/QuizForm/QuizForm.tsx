import { LoadingSpinner } from '@components/UI/LoadingSpinner';
import { QuizFormAnswer } from './QuizFormAnswer';
import { QuestionDetails } from '@/types/SupabaseTypes';
import { CSSProperties, useContext } from 'react';
import { QuizPreferencesContext } from '@/contexts/QuizPreferences/QuizPreferencesContext';

interface Props {
    questionDetails: QuestionDetails | undefined;
    onAnswerSelect(e: React.FormEvent): Promise<void>;
    isDataLoading: boolean;
    questionNumber: number;
    timeLimit: number;
}

interface ElementStyleProperties extends CSSProperties {
    '--time-limit': string;
}

export const QuizForm = ({
    questionDetails,
    onAnswerSelect,
    isDataLoading,
    questionNumber,
    timeLimit,
}: Props) => {
    const { questionAmount } = useContext(QuizPreferencesContext);
    return (
        <form
            onSubmit={onAnswerSelect}
            className={`min-w-[320px] w-[90%] max-w-[800px] mx-auto flex flex-col justify-center border border-[#e6e6e6] bg-[rgb(250,250,250)] shadow-lg rounded-[5px] min-h-[400px] relative ${
                isDataLoading && 'before:overlay'
            }`}
        >
            <h2 className="text-center font-bold text-4xl px-6 py-3 border-b bg-[rgb(243,243,243)] border-[#d4d4d4]">
                {questionDetails?.question}
            </h2>
            <div
                aria-hidden="true"
                style={{ '--time-limit': `${timeLimit}s` } as ElementStyleProperties}
                className="time-limit-tracker"
            ></div>
            <h3 className="my-2 text-xl bg-[#f1f1f1] w-fit mx-auto px-1 rounded-md border border-[#dadada]">
                Q{questionNumber}/{questionAmount}
            </h3>

            <div className="flex flex-col">
                {questionDetails?.answers?.map(answer => (
                    <QuizFormAnswer key={answer} answer={answer} />
                ))}
            </div>
            <button className="mt-5 mb-3 mx-auto py-2 px-20 border border-[#d4d4d4] rounded-md hover:bg-[#f1f1f1] text-2xl font-bold transition-colors">
                Next
            </button>
            {isDataLoading && <LoadingSpinner />}
        </form>
    );
};
