import { useState } from 'react';
import { QuizPreferencesToggleBtn } from './QuizPreferencesToggleBtn/QuizPreferencesToggleBtn';
import { QuizPreferencesList } from './QuizPreferencesList/QuizPreferencesList';

export const QuizPreferences = () => {
    const [isPreferencesVisible, setIsPreferencesVisible] = useState(false);

    const preferencesToggleHandler = () =>
        setIsPreferencesVisible(isPreferencesVisible => !isPreferencesVisible);

    return (
        <div className="relative">
            <QuizPreferencesToggleBtn preferencesToggleHandler={preferencesToggleHandler} />
            {isPreferencesVisible && <QuizPreferencesList />}
        </div>
    );
};
