import { SocialLink } from './SocialLink';

export function BusinessCard() {
    return (
        <div className="relative flex justify-center mb-16">
            {/* Card Shadow/Depth Effect */}
            <div className="absolute inset-0 bg-black/10 rounded-2xl transform rotate-1 scale-105 max-w-lg min-h-[600px]"></div>

            {/* Main Business Card */}
            <div className="relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-2xl overflow-hidden max-w-lg w-full min-h-[600px]">
                {/* Decorative Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500 to-purple-500 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-500 to-blue-500 rounded-full translate-y-12 -translate-x-12"></div>
                </div>

                {/* Card Content */}
                <div className="relative p-12 flex flex-col justify-between h-full min-h-[600px]">
                    {/* Logo/Brand Area */}
                    <div className="flex items-center mb-12">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-8">
                            <span className="text-white font-bold text-3xl">R</span>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-slate-800 dark:text-white">RVÐ Projects</h1>
                            <p className="text-lg text-slate-500 dark:text-slate-400">Web Development Solutions</p>
                        </div>
                    </div>

                    {/* Main Info */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">Full-Stack Developer</h2>
                        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                            Crafting modern web applications with cutting-edge front-end technologies.
                            Building robust back-end systems.
                            Enjoys responsive design, optimal user experiences, and back-end architectures.
                        </p>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-5 mb-12">
                        <SocialLink
                            icon={
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                                </svg>
                            }
                            text="+1 (819) 621-7289"
                            bgColor="bg-purple-100 dark:bg-purple-900"
                            iconColor="text-purple-600"
                            href="tel:+18196217289"
                        />

                        <SocialLink
                            icon={
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                            }
                            text="triangle1232009@hotmail.com"
                            bgColor="bg-blue-100 dark:bg-blue-900"
                            iconColor="text-blue-600"
                            href="mailto:triangle1232009@hotmail.com"
                        />

                        <SocialLink
                            icon={
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                            }
                            text="www.rvdproject.synology.me"
                            bgColor="bg-green-100 dark:bg-green-900"
                            iconColor="text-green-600"
                            href="https://www.rvdproject.synology.me"
                        />

                        <SocialLink
                            icon={
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                </svg>
                            }
                            text="github.com/Izocel"
                            bgColor="bg-gray-100 dark:bg-gray-900"
                            iconColor="text-gray-600"
                            href="https://github.com/Izocel"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}