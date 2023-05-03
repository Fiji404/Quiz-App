import { IoMdSettings } from 'react-icons/io';

interface Props {
    preferencesToggleHandler(): void;
}

export const QuizPreferencesToggleBtn = ({ preferencesToggleHandler }: Props) => {
    return (
        <button
            onClick={preferencesToggleHandler}
            className="border border-accent p-1 rounded-md hover:bg-[#eee] transition-colors"
            aria-label="Toggle quiz preferences visibility"
        >
            <IoMdSettings className="text-3xl" />
        </button>
    );
};
