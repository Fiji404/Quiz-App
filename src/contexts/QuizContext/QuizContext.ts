import { PossibleQuizNames } from '@/types/SupabaseTypes';
import { createContext } from 'react';

export const QuizContext = createContext({
    isQuizStarted: false,
    currentQuizName: '',
    updateCurrentQuizName(quizName: PossibleQuizNames) {},
    stopQuiz() {}
});
