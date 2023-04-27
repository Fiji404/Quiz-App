import { useContext } from 'react';
import { PreferenceSelectItem } from '../PreferenceSelectItem/PreferenceSelectItem';
import { QuizPreferencesContext } from '@/contexts/QuizPreferences/QuizPreferencesContext';

interface Props {
    preferenceName: string;
}

export const QuizPreferencesListItem = ({ preferenceName }: Props) => {
    const { questionAmount, timeLimit} = useContext(QuizPreferencesContext)
    const selectPreferenceValue: Record<string, number> = {
        'Question amount': questionAmount,
        'Time limit': timeLimit
    }
    return (
        <li className="py-3 px-1 flex justify-between gap-4">
            <h2>{preferenceName}</h2>
            <PreferenceSelectItem preferenceValue={selectPreferenceValue[preferenceName]} />
        </li>
    );
};
