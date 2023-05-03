export type PossibleQuizNames = 'html' | 'css' | 'javascript' | 'sass' | 'population' | 'flags' |  '';

export interface QuestionDetails {
    question: string | null;
    answers: string[] | null;
}
