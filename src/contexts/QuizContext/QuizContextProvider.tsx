import { QuizContext } from './QuizContext';
import { PropsWithChildren, useState } from 'react';

type PossibleQuizNames = 'html' | 'css' | 'javascript' | '';

export const QuizContextProvider = ({ children }: PropsWithChildren) => {
    const [currentQuizName, setCurrentQuizName] = useState<PossibleQuizNames>('');

    const stopQuizHandler = () => {
        setCurrentQuizName('');
    };

    const quizSelectionHandler = ({ target }: React.MouseEvent) => {
        if (!(target instanceof Element)) return;
        const quizNameHeading = target.closest('button')?.closest('li')?.querySelector('h2');
        const quizName = quizNameHeading?.textContent?.trim().toLowerCase();
        if (quizName && (quizName === 'html' || quizName === 'css' || quizName === 'javascript'))
            setCurrentQuizName(quizName);
    };

    return (
        <QuizContext.Provider
            value={{
                isQuizStarted: !!currentQuizName,
                currentQuizName,
                quizSelectionHandler,
                stopQuizHandler,
            }}
        >
            {children}
        </QuizContext.Provider>
    );
};
