import { FaGithub } from 'react-icons/fa';

export const NavGithubLink = () => {
    return (
        <a
            className="font-semibold border bg-[rgb(255,255,255)] border-accent py-1 px-2 rounded-[5px] flex items-center gap-2 text-lg hover:bg-[#ebebeb] transition-colors
            "
            rel="noreferrer"
            target="_blank"
            href="https://github.com/Fiji404/Quizzy.git"
        >
            GitHub <FaGithub className="text-2xl text-[#222]" />
        </a>
    );
};
