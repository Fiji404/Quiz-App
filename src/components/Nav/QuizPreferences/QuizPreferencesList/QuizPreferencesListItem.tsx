import { useContext } from 'react';
import { PreferenceValuePicker } from '../PreferenceValuePicker/PreferenceValuePicker';
import { QuizPreferencesContext } from '@/contexts/QuizPreferences/QuizPreferencesContext';

interface Props {
    preferenceName: string;
}

export const QuizPreferencesListItem = ({ preferenceName }: Props) => {
    const { questionAmount, timeLimit } = useContext(QuizPreferencesContext);
    const quizPreferenceValueByName: Record<string, number> = {
        'Question amount': questionAmount,
        'Time limit': timeLimit
    };
    return (
        <li className="py-3 px-1 flex justify-between gap-4">
            <h2>{preferenceName}</h2>
            <PreferenceValuePicker preferenceValue={quizPreferenceValueByName[preferenceName]} />
        </li>
    );
};
