import { NavLogo } from './NavLogo';
import { FaGithub } from 'react-icons/fa';

export const Nav = () => {
    return (
        <nav className="flex justify-between items-center py-2 px-3 border-b border-accent">
            <NavLogo />
            <a
                className="font-semibold border border-accent py-1 px-2 rounded-[4px] flex items-center gap-2 text-lg hover:bg-[#f7f7f7] transition-colors
            "
                href="https://github.com/Fiji404/Quizzy.git"
            >
                GitHub <FaGithub fontSize="1.4rem" color="#222222" />
            </a>
        </nav>
    );
};
