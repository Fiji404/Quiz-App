interface Props {
    answer: string;
}

export const QuizFormAnswer = ({ answer }: Props) => {
    return (
        <label className="flex gap-4 items-center justify-between px-5 text-2xl border-b hover:bg-[#f3f3f3] cursor-pointer py-4 transition-colors">
            {answer}
            <input className="custom-radio-input" name="quiz-answer" type="radio" />
        </label>
    );
};
