import { LoadingSpinner } from '../../UI/LoadingSpinner';
import { QuizFormAnswer } from './QuizFormAnswer';

interface Props {
    question:
        | {
              [key: string]: string | string[] | null;
              question: string;
              answers: string[] | null;
          }
        | undefined;
    onAnswerSelect(e: React.FormEvent): Promise<void>;
    isDataLoading: boolean;
}

export const QuizForm = ({ question, onAnswerSelect, isDataLoading }: Props) => {
    return (
        <form
            onSubmit={onAnswerSelect}
            className={`min-w-[320px] w-[90%] max-w-[800px] mx-auto flex flex-col justify-center border border-[#e6e6e6] bg-[rgb(250,250,250)] rounded-[5px] min-h-[400px] relative ${
                isDataLoading && 'before:overlay'
            }`}
        >
            <h2 className="text-center font-bold text-4xl px-6 py-3 border-b bg-[rgb(243,243,243)] border-[#d4d4d4]">{question?.question}</h2>
            <div className="flex flex-col">
                {question?.answers?.map(answer => (
                    <QuizFormAnswer key={answer} answer={answer} />
                ))}
            </div>
            <button className="mt-5 mb-3 mx-auto py-2 px-20 border border-[#e6e6e6] rounded-[4px] hover:bg-[#ebebeb] text-2xl font-bold transition-colors">
                Next
            </button>
            {isDataLoading && <LoadingSpinner />}
        </form>
    );
};
