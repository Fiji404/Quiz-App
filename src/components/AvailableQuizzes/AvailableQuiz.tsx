import { BsCodeSlash, BsFillGeoAltFill } from 'react-icons/bs';

interface Props {
    title: string;
    description: string;
    topic: string;
}

export const AvailableQuiz = ({ title, description, topic }: Props) => {
    const topicText =
        topic === 'programming' ? (
            <>
                {topic} <BsCodeSlash />
            </>
        ) : (
            <>
                {topic} <BsFillGeoAltFill />
            </>
        );
    return (
        <li className="flex flex-col justify-between min-h-[280px] border rounded-[3px] bg-[rgb(250,250,250)] py-4 px-2">
            <h2 className="text-center text-4xl font-bold">{title}</h2>
            <p className="mt-4 text-center text-[#5f5f5f] text-lg">{description}</p>
            <p className="flex items-center gap-2 mt-4 border rounded-md w-fit ml-auto py-1 px-2 font-bold bg-[#ebebeb] border-[#ccc]">
                {topicText}
            </p>
        </li>
    );
};
