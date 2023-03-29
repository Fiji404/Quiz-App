import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, PUBLIC_KEY, QUESTIONS_AMOUNT } from '../../config/supabase.json';
import { useEffect, useState } from 'react';
import { QuizForm } from './QuizForm/QuizForm';
import { Database } from '@/schema/supabase';
import { FinalScreen } from './ResultsScreen/ResultsScreen';

interface Props {
    currentQuizName: 'html' | 'css' | 'javascript';
}

type QuestionDetails =
    | {
          [key: string]: string | null | string[];
          question: string;
          answers: string[] | null;
      }[]

const supabase = createClient<Database>(SUPABASE_URL, PUBLIC_KEY);

export const QuizDashboard = ({ currentQuizName }: Props) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [randomQuestionNumber, setRandomQuestionNumber] = useState(() =>
        Math.trunc(Math.random() * QUESTIONS_AMOUNT)
    );
    const [score, setScore] = useState(0);
    const [questionsList, setQuestionsList] = useState<QuestionDetails>([]);
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
        if (checkedAnswer === data?.[0]?.correctAnswer) setScore(previousScore => ++previousScore);
        setCurrentQuestion(prevQuestion => ++prevQuestion);
        setIsDataLoading(false);
        setRandomQuestionNumber(Math.trunc(Math.random() * QUESTIONS_AMOUNT));
        if (questionsList?.length === 5) setIsQuizFinished(true);
    };

    useEffect(() => {
        if (isQuizFinished) return;
        (async function getNewQuestion() {
            setIsDataLoading(true);
            console.log(currentQuizName)
            const { data, error } = await supabase
                .from(`${currentQuizName}_questions`)
                .select('question, answers')
                .range(randomQuestionNumber, randomQuestionNumber);
            setQuestionsList(prevQuestionsList => {
                const isQuestionDuplicate = prevQuestionsList?.some(
                    questionDetails => questionDetails.question === data?.[0]?.question
                );
                console.log(isQuestionDuplicate)
                if (isQuestionDuplicate) getNewQuestion();
                if (!isQuestionDuplicate && data && prevQuestionsList !== null)
                    return [...prevQuestionsList, ...data];
                return prevQuestionsList;
            });
            console.log(data, error);
            setIsDataLoading(false);
        })();
    }, [randomQuestionNumber]);
    return (
        <>
            {isQuizFinished ? (
                <FinalScreen score={score} totalQuestions={questionsList.length} />
            ) : (
                <QuizForm
                    isDataLoading={isDataLoading}
                    onAnswerSelect={chooseAnswerHandler}
                    question={questionsList?.[currentQuestion]}
                />
            )}
        </>
    );
};
