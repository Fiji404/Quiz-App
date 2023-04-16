import { PossibleQuizNames } from '@/types/SupabaseTypes';
import { createContext } from 'react';

interface QuizContextBody {
    isQuizStarted: boolean;
    currentQuizName: PossibleQuizNames | '';
    updateCurrentQuizName(quizName: string): void;
    stopQuizHandler(): void;
}

export const QuizContext = createContext<QuizContextBody>({
    isQuizStarted: false,
    currentQuizName: '',
    updateCurrentQuizName() {},
    stopQuizHandler() {},
});
