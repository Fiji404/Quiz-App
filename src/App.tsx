import { Nav, WelcomeHeader, AvailableQuizzes } from '@/components';
import { QuizContextProvider } from '@/contexts/QuizContext/QuizContextProvider';
import { QuizPreferencesContextProvider } from './contexts/QuizPreferences/QuizPreferencesContextProvider';

export const App = () => {
    return (
        <>
            <QuizPreferencesContextProvider>
                <Nav />
                <QuizContextProvider>
                    <main className="flex flex-col justify-center grow h-full">
                        <WelcomeHeader />
                        <AvailableQuizzes />
                    </main>
                </QuizContextProvider>
            </QuizPreferencesContextProvider>
        </>
    );
};
