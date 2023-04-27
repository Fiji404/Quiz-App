import { Nav, WelcomeHeader, AvailableQuizzes } from '@/components';
import { QuizContextProvider } from '@/contexts/QuizContext/QuizContextProvider';
import { QuizPreferencesProvider } from './contexts/QuizPreferences/QuizPreferencesContextProvider';

export const App = () => {
    return (
        <>
            <QuizPreferencesProvider>
                <Nav />
            </QuizPreferencesProvider>
            <QuizContextProvider>
                <main className="flex flex-col justify-center grow h-full">
                    <WelcomeHeader />
                    <AvailableQuizzes />
                </main>
            </QuizContextProvider>
        </>
    );
};
