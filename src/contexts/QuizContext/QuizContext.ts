import { createContext } from 'react';

interface QuizContextBody {
    isQuizStarted: boolean;
    currentQuizName: 'html' | 'css' | 'javascript' | '';
    quizSelectionHandler({ target }: React.MouseEvent): void;
    stopQuizHandler(): void;
}

export const QuizContext = createContext<QuizContextBody>({
    isQuizStarted: false,
    currentQuizName: '',
    quizSelectionHandler() {},
    stopQuizHandler() {},
});
