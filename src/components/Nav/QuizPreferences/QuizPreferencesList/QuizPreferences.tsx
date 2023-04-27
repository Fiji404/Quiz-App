import { useState } from 'react';
import { OpenQuizPreferencesBtn } from '../OpenQuizPreferencesBtn/OpenQuizPreferencesBtn';
import { QuizPreferencesList } from './QuizPreferencesList';

export const QuizPreferences = () => {
    const [isPreferencesListVisible, setIsPreferencesListVisible] = useState(false);

    const onListToggle = () => {
        setIsPreferencesListVisible(isPreferencesListVisible => !isPreferencesListVisible);
    };

    return (
        <div className='relative'>
            <OpenQuizPreferencesBtn onListToggle={onListToggle} />
            {isPreferencesListVisible && <QuizPreferencesList />}
        </div>
    );
};
