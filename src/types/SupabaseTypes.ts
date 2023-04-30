export type PossibleQuizNames = 'html' | 'css' | 'javascript' | '';

export interface QuestionDetails {
    question: string | null;
    answers: string[] | null;
}
