import { QuizPreferencesContext } from '@/contexts/QuizPreferences/QuizPreferencesContext';
import { useContext } from 'react';

interface Props {
    preferenceValue: number;
}

export const PreferenceSelectItem = ({ preferenceValue }: Props) => {
    const { updateUserPreferences } = useContext(QuizPreferencesContext);

    const changePreferenceHandler = (e: React.FormEvent) => {
        if (!(e.target instanceof HTMLSelectElement)) return;
        const changedPreferenceName = e.target.closest('li')?.querySelector('h2')?.textContent;
        const chosenPreferenceValue = e.target.value;
        console.log(changedPreferenceName);
        if (changedPreferenceName) {
            updateUserPreferences({
                preferenceName: changedPreferenceName,
                preferenceValue: chosenPreferenceValue,
            });
        }
    };

    return (
        <select onChange={changePreferenceHandler} className="cursor-pointer rounded" value={preferenceValue}>
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
        </select>
    );
};
