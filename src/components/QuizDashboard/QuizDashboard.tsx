import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, PUBLIC_KEY } from '../../config/supabase.json';
import { useEffect, useState } from 'react';
import { QuizForm } from './QuizForm/QuizForm';
import { Database } from '@/schema/supabase';
import { FinalScreen } from './ResultsScreen/ResultsScreen';

interface Props {
    currentQuizName: 'html' | 'css' | 'javascript' | null;
}

type QuestionDetails =
    | {
          [key: string]: string | null | string[];
          question: string;
          answers: string[] | null;
      }[]
    | null;

const supabase = createClient<Database>(SUPABASE_URL, PUBLIC_KEY);

export const QuizDashboard = ({ currentQuizName }: Props) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);
    const [questions, setQuestions] = useState<QuestionDetails>();
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
            .range(currentQuestion, currentQuestion);
        if (checkedAnswer === data?.[0]?.correctAnswer) setCurrentScore(previousScore => ++previousScore);
        setCurrentQuestion(prevQuestion => ++prevQuestion);
        setIsDataLoading(false);
        if (currentQuestion === 2) setIsQuizFinished(true)
        console.log(checkedAnswer === data?.[0]?.correctAnswer);
    };

    useEffect(() => {
        (async () => {
            setIsDataLoading(true);
            const { data } = await supabase
                .from(`${currentQuizName}_questions`)
                .select('question, answers')
                .range(0, 2);
            setQuestions(data);
            setIsDataLoading(false);
        })();
    }, []);
    return (
        <>
            {isQuizFinished ? (
                <FinalScreen score={currentScore} totalQuestions={3}/>
            ) : (
                <QuizForm
                    isDataLoading={isDataLoading}
                    onAnswerSelect={chooseAnswerHandler}
                    question={questions?.[currentQuestion]}
                />
            )}
        </>
    );
};
