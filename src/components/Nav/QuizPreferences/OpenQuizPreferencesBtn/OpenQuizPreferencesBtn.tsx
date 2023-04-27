import { IoMdSettings } from 'react-icons/io';

interface Props {
    onListToggle(): void;
}

export const OpenQuizPreferencesBtn = ({ onListToggle }: Props) => {
    return (
        <button
            onClick={onListToggle}
            className="border border-accent p-1 rounded-md hover:bg-[#eee] transition-colors"
            aria-label="Toggle quiz preferences list"
        >
            <IoMdSettings className="text-3xl" />
        </button>
    );
};
