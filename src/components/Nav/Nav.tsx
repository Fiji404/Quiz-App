import { NavGithubLink } from './NavGithubLink';
import { NavLogo } from './NavLogo';

export const Nav = () => {
    return (
        <nav className="flex justify-between items-center py-2 px-3 border-b border-accent bg-[rgba(250,250,250,0.23)] backdrop-blur-sm sticky top-0 z-10">
            <NavLogo />
            <NavGithubLink />
        </nav>
    );
};
