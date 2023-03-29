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
        const selectedQuizName = target
            .closest('button')
            ?.closest('li')
            ?.querySelector('h2')
            ?.textContent?.trim()
            .toLowerCase();
        if (
            selectedQuizName &&
            (selectedQuizName === 'html' || selectedQuizName === 'css' || selectedQuizName === 'javascript')
        )
            setCurrentQuizName(selectedQuizName);
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
