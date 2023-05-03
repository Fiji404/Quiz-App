import { PropsWithChildren, useEffect, useState } from 'react';
import { QuizPreferencesContext } from './QuizPreferencesContext';
import { PreferenceChangeDetails, UserPreferences } from '@/types/App';

const preferencesNamesInCamelCase: Record<string, string> = {
    'Question amount': 'questionAmount',
    'Time limit': 'timeLimit'
};

export const QuizPreferencesContextProvider = ({ children }: PropsWithChildren) => {
    const getUserSavedPreferences = () => {
        const userSavedPreferences = Object.entries(localStorage);
        const validQuizPreferencesNames = Object.values(preferencesNamesInCamelCase);
        if (userSavedPreferences.length === 0) return { timeLimit: 5, questionAmount: 5 };
        const userSavedPreferencesObj = userSavedPreferences.reduce(
            (acc, [key, value]) =>
                validQuizPreferencesNames.includes(key) ? { ...acc, [key]: +value } : acc,
            {}
        ) as UserPreferences;
        return userSavedPreferencesObj;
    };

    const [userPreferences, setUserPreferences] = useState(getUserSavedPreferences);

    const updateUserPreferences = ({ preferenceName, preferenceValue }: PreferenceChangeDetails) => {
        setUserPreferences(prevPreferences => ({
            ...prevPreferences,
            [preferencesNamesInCamelCase[preferenceName]]: preferenceValue
        }));
    };

    useEffect(() => {
        const userPreferencesKeyValuePairs = Object.entries(userPreferences);
        userPreferencesKeyValuePairs.forEach(([key, value]) => localStorage.setItem(key, value.toString()));
    }, [userPreferences]);

    return (
        <QuizPreferencesContext.Provider
            value={{
                timeLimit: userPreferences.timeLimit,
                questionAmount: userPreferences.questionAmount,
                updateUserPreferences
            }}
        >
            {children}
        </QuizPreferencesContext.Provider>
    );
};
