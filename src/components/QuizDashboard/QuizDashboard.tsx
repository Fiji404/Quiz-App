import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, PUBLIC_KEY } from '@/config/supabase.json';
import { useContext, useEffect, useState } from 'react';
import { QuizForm } from './QuizForm/QuizForm';
import { Database } from '@/schema/supabase';
import { QuestionDetails } from '@/types/SupabaseTypes';
import { FinalScreen } from './ResultsScreen/ResultsScreen';
import { ReturnToQuizzes } from './ReturnToQuizzes/ReturnToQuizzes';
import { QuizPreferencesContext } from '@/contexts/QuizPreferences/QuizPreferencesContext';
import { QuizContext } from '@/contexts/QuizContext/QuizContext';

const supabase = createClient<Database>(SUPABASE_URL, PUBLIC_KEY);

export const QuizDashboard = () => {
    const { questionAmount, timeLimit } = useContext(QuizPreferencesContext);
    const { currentQuizName } = useContext(QuizContext);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [randomQuestionNumber, setRandomQuestionNumber] = useState(() =>
        Math.trunc(Math.random() * questionAmount)
    );
    const [userScore, setUserScore] = useState(0);
    const [questionsList, setQuestionsList] = useState<QuestionDetails[]>([]);
    const [isDataLoading, setIsDataLoading] = useState(false);
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    const chooseAnswerHandler = async (e: React.FormEvent) => {
        if (isQuizFinished) return;
        setIsDataLoading(true);
        e.preventDefault();
        if (!(e.target instanceof HTMLFormElement)) return;
        const checkedAnswer = [...e.currentTarget.querySelectorAll('label')].find(
            label => label.querySelector('input')?.checked
        )?.textContent;
        const { data } = await supabase
            .from(`${currentQuizName}_questions`)
            .select('correctAnswer')
            .range(randomQuestionNumber, randomQuestionNumber);
        if (checkedAnswer === data?.[0]?.correctAnswer) setUserScore(previousScore => ++previousScore);
        setCurrentQuestion(prevQuestion => ++prevQuestion);
        setIsDataLoading(false);
        setRandomQuestionNumber(Math.trunc(Math.random() * questionAmount));
        if (currentQuestion === 4) setIsQuizFinished(true);
    };

    useEffect(() => {
        if (isQuizFinished) return;
        (async function getNewQuestion() {
            setIsDataLoading(true);
            try {
                const { data, error } = await supabase
                    .from(`${currentQuizName}_questions`)
                    .select('question, answers')
                    .range(randomQuestionNumber, randomQuestionNumber);
                if (error) throw new Error(error.message);
                setQuestionsList(prevQuestionsList => {
                    const isQuestionDuplicated = prevQuestionsList?.some(
                        questionDetails => questionDetails.question === data?.[0]?.question
                    );
                    if (isQuestionDuplicated) getNewQuestion();
                    if (!isQuestionDuplicated && data && prevQuestionsList !== null)
                        return [...prevQuestionsList, ...data];
                    return prevQuestionsList;
                });
            } catch (err) {
                console.error(err);
            }
            setIsDataLoading(false);
        })();
    }, [randomQuestionNumber]);
    return (
        <>
            <ReturnToQuizzes />
            {isQuizFinished ? (
                <FinalScreen score={userScore} totalQuestions={questionsList.length} />
            ) : (
                <>
                    <QuizForm
                        timeLimit={timeLimit}
                        questionNumber={currentQuestion + 1}
                        isDataLoading={isDataLoading}
                        onAnswerSelect={chooseAnswerHandler}
                        questionDetails={questionsList?.[currentQuestion]}
                    />
                </>
            )}
        </>
    );
};
