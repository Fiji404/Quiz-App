import { QuizPreferencesContext } from '@/contexts/QuizPreferences/QuizPreferencesContext';
import { useContext } from 'react';
import { PreferenceValueOption } from './PreferenceValueOption';

interface Props {
    preferenceValue: number;
}

const PREFERENCES_VALUES = ['5', '10', '15', '20'];

export const PreferenceValuePicker = ({ preferenceValue }: Props) => {
    const { updateUserPreferences } = useContext(QuizPreferencesContext);

    const changePreferenceHandler = (e: React.FormEvent) => {
        if (!(e.target instanceof HTMLSelectElement)) return;
        const changedPreferenceName = e.target.closest('li')?.querySelector('h2')?.textContent;
        const chosenPreferenceValue = e.target.value;
        if (changedPreferenceName)
            updateUserPreferences({
                preferenceName: changedPreferenceName,
                preferenceValue: chosenPreferenceValue
            });
    };

    return (
        <select onChange={changePreferenceHandler} className="cursor-pointer rounded" value={preferenceValue}>
            {PREFERENCES_VALUES.map(preferenceValue => (
                <PreferenceValueOption key={preferenceValue} preferenceValue={preferenceValue} />
            ))}
        </select>
    );
};
