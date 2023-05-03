import { createContext } from 'react';

export const QuizPreferencesContext = createContext({
    timeLimit: 5,
    questionAmount: 5,
    updateUserPreferences({}) {}
});
