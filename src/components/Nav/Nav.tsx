import { NavGithubLink } from './NavGithubLink/NavGithubLink';
import { NavLogo } from './NavLogo/NavLogo';
import { QuizPreferences } from './QuizPreferences/QuizPreferencesList/QuizPreferences';

export const Nav = () => {
    return (
        <nav className="flex justify-between items-center py-2 px-3 border-b border-accent bg-[rgba(250,250,250,0.8)] backdrop-blur-sm sticky top-0 z-10">
            <NavLogo />
            <div className='flex gap-2'>
                <NavGithubLink />
                <QuizPreferences />
            </div>
        </nav>
    );
};
