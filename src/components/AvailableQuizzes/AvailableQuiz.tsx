import { BsCodeSlash, BsFillGeoAltFill } from 'react-icons/bs';
import { VscDebugStart } from 'react-icons/vsc';
import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3, FaSass, FaFlag } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { BsFillPeopleFill } from 'react-icons/bs'

interface Props {
    title: string;
    description: string;
    topic: string;
    currentCard: 0 | 1 | 2 | 3 | 4 | 5;
}

const QUIZ_ICONS: Record<string, JSX.Element> = {
    HTML: <AiFillHtml5 color="#FF5722" />,
    CSS: <FaCss3 color="#1572B7" />,
    JavaScript: <SiJavascript color="#F7DF1E" />,
    SASS: <FaSass color="#CC6397" />,
    Population: <BsFillPeopleFill color="#ccc" />,
    Flags: <FaFlag color="#f00" /> 
}

export const AvailableQuiz = ({ title, description, topic, currentCard }: Props) => {
    const topicText =
        topic === 'programming' ? (
            <>
                {topic} <BsCodeSlash color="#16d616" />
            </>
        ) : (
            <>
                {topic} <BsFillGeoAltFill color="#da0b0b" />
            </>
        );
    return (
        <li
        data-quiz={title.toLowerCase()}
            className="flex flex-col justify-between min-h-[280px] border rounded-[3px] bg-[#fafafa] opacity-0 animate-[originate_1s_1s_forwards] py-4 px-3"
        >
            <h2 className="flex justify-center items-center gap-3 text-center text-4xl font-bold">{title} {QUIZ_ICONS[title]}</h2>
            <p className="mt-4 text-center text-[#5f5f5f] text-lg">{description}</p>
            <div className="mt-4 flex justify-between items-center">
                <p className="flex items-center gap-2 border rounded-md w-fit mr-auto py-1 px-2 font-bold bg-[#f1f1f1] border-[#dddddd]">
                    {topicText}
                </p>
                <button
                    className="bg-[#f1f1f1] border border-[#dddddd] p-2 rounded-md hover:bg-[#e9e9e9] transition-colors"
                    aria-label="Start quiz button"
                >
                    <VscDebugStart fontSize="1.3rem" color="#16d616" />
                </button>
            </div>
        </li>
    );
};
