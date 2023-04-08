import { Nav, WelcomeHeader, AvailableQuizzes } from '@/components';
import { QuizContextProvider } from '@/contexts/QuizContext/QuizContextProvider';

export const App = () => {
    return (
        <>
            <Nav />
            <QuizContextProvider>
                <main className="flex flex-col justify-center grow h-full">
                    <WelcomeHeader />
                    <AvailableQuizzes />
                </main>
            </QuizContextProvider>
        </>
    );
};
