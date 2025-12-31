interface SocialLinkProps {
    icon: React.ReactNode;
    text: string;
    bgColor: string;
    iconColor: string;
    href?: string;
}

export function SocialLink({ icon, text, bgColor, iconColor, href }: SocialLinkProps) {
    const linkElement = (
        <div className="social-link flex items-center text-sm group cursor-pointer hover:translate-x-1 transition-transform duration-200">
            <div className={`w-5 h-5 rounded-full ${bgColor} flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200`}>
                <div className={iconColor}>
                    {icon}
                </div>
            </div>
            <span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-200">{text}</span>
        </div>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="block">
                {linkElement}
            </a>
        );
    }

    return linkElement;
}