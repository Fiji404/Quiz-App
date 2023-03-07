import availableQuizes from '@/data/availableQuizzes.json';
import { AvailableQuiz } from './AvailableQuiz';

export const AvailableQuizzes = () => {
    return (
        <ul className="mt-8 max-w-[95%] mx-auto grid grid-cols-3 gap-6">
            {availableQuizes.map(props => (
                <AvailableQuiz {...props} />
            ))}
        </ul>
    );
};
