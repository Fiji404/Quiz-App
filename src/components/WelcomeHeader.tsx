import { QuizContext } from '../contexts/QuizContext/QuizContext';
import { useContext } from 'react';

export const WelcomeHeader = () => {
    const { isQuizStarted } = useContext(QuizContext);
    return (
        <>
            {!isQuizStarted && (
                <header className="mt-6 py-4 px-2">
                    <h1 className="text-center text-4xl font-extrabold opacity-0 -translate-y-full animate-originate">
                        Welcome to <span className="text-[#4DAAF7]">Quizzy</span>, the place to improve your knowledge on any topic
                    </h1>
                    <p className="mt-1 text-center font-medium text-[#3b3b3b] opacity-0 animate-[originate_1s_500ms_forwards]">
                        Select a quiz below to get started
                    </p>
                </header>
            )}
        </>
    );
};
