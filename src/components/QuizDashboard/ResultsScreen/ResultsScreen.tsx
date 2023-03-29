interface Props {
    score: number;
    totalQuestions: number | undefined;
}

export const FinalScreen = ({ score, totalQuestions }: Props) => {
    return (
        <div className="flex justify-center flex-col items-center gap-3 border border-accent w-[95%] max-w-[700px] py-4 px-2 mx-auto rounded-md bg-[#fafafa]">
            <h2 className="text-4xl font-bold flex flex-col items-center">
                You answered{' '}
                <span className={`${score > score / 2 ? 'text-green-400' : 'text-red-500'}`}>{score}</span>{' '}
                out of <span>{totalQuestions}</span> questions correctly
            </h2>
            <button className="mt-4 border py-2 px-4 border-[#dddddd] text-2xl rounded-[4px] bg-[#f1f1f1]">View all questions</button>
        </div>
    );
};
