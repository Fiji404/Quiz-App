import { useContext } from 'react';
import { QuizPreferencesListItem } from './QuizPreferencesListItem';

const availableQuizPreferences = ['Question amount', 'Time limit'];

export const QuizPreferencesList = () => {
    return (
        <ul className="absolute -bottom-1 translate-y-full bg-[#f8f8f8] border border-[#e7e7e7] rounded-md right-0 w-max">
            {availableQuizPreferences.map(preferenceName => (
                <QuizPreferencesListItem key={preferenceName} preferenceName={preferenceName} />
            ))}
        </ul>
    );
};
