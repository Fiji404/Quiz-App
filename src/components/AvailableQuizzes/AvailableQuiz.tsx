import { BsCodeSlash, BsFillGeoAltFill } from 'react-icons/bs';
import { VscDebugStart } from 'react-icons/vsc';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3, FaSass, FaFlag } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { BsFillPeopleFill } from 'react-icons/bs';

interface Props {
    title: string;
    description: string;
    topic: string;
}

const QUIZ_ICONS: Record<string, JSX.Element> = {
    HTML: <AiFillHtml5 color="#FF5722" />,
    CSS: <FaCss3 color="#1572B7" />,
    JavaScript: <SiJavascript color="#F7DF1E" />,
    SASS: <FaSass color="#CC6397" />,
    Population: <BsFillPeopleFill color="#ccc" />,
    Flags: <FaFlag color="#f00" />,
};

const TOPIC_ICONS: Record<string, JSX.Element> = {
    programming: <BsCodeSlash color="#16d616" />,
    geography: <BsFillGeoAltFill color="#da0b0b" />,
};

export const AvailableQuiz = ({ title, description, topic }: Props) => {
    return (
        <li
            className="flex flex-col justify-between min-h-[280px] border rounded-lg bg-[#fafafa] opacity-0 animate-[originate_1s_1s_forwards] py-4 px-3"
        >
            <h2 className="flex justify-center items-center gap-3 text-center text-4xl font-bold">
                {title} {QUIZ_ICONS[title]}
            </h2>
            <p className="mt-4 text-center text-[#5f5f5f] text-lg">{description}</p>
            <div className="mt-4 flex justify-between items-center">
                <p className="flex items-center gap-2 border rounded-md w-fit mr-auto py-1 px-2 font-bold bg-[#f5f5f5] border-[#e4e4e4]">
                    {topic} {TOPIC_ICONS[topic]}
                </p>
                <button
                    className="flex items-center gap-1 font-bold bg-[#f5f5f5] border border-[#e4e4e4] px-3 py-1 rounded-md hover:bg-[rgb(238,237,237)] transition-colors"
                    aria-label="Start quiz button"
                >
                    Play <VscDebugStart fontSize="1.3rem" color="#16d616" />
                </button>
            </div>
        </li>
    );
};
