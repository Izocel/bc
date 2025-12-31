"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Business Card Container */}
        <div className="relative flex justify-center mb-16">
          {/* Card Shadow/Depth Effect */}
          <div className="absolute inset-0 bg-black/10 rounded-2xl transform rotate-1 scale-105 max-w-md"></div>

          {/* Main Business Card */}
          <div className="relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-2xl overflow-hidden max-w-md w-full">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500 to-purple-500 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-500 to-blue-500 rounded-full translate-y-12 -translate-x-12"></div>
            </div>

            {/* Card Content */}
            <div className="relative p-8">
              {/* Logo/Brand Area */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-800 dark:text-white">RVÐ Projects</h1>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Web Development Solutions</p>
                </div>
              </div>

              {/* Main Info */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-slate-800 dark:text-white mb-1">Full-Stack Developer</h2>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Crafting modern web applications with React, Next.js, and cutting-edge technologies.
                  Specializing in responsive design and optimal user experiences.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-3">

                <div className="flex items-center text-sm">
                  <div className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">+1 (819) 621-7289</span>
                </div>

                <div className="flex items-center text-sm">
                  <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">triangle1232009@hotmail.com</span>
                </div>

                <div className="flex items-center text-sm">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">www.rvdproject.synology.me</span>
                </div>


                <div className="flex items-center text-sm">
                  <div className="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">github.com/Izocel</span>
                </div>

              </div>

              {/* Skills/Technologies */}
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">React</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs rounded-full font-medium">Next.js</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs rounded-full font-medium">TypeScript</span>
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 text-xs rounded-full font-medium">Tailwind</span>
                </div>
              </div>

              {/* QR Code placeholder */}
              <div className="absolute bottom-4 right-4">
                <div className="w-16 h-16 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-slate-400 dark:text-slate-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Carousel */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white text-center mb-8">Tech Stack</h3>
          <div className="overflow-hidden">
            <div
              className="flex space-x-8"
              style={{
                animation: 'scroll 20s linear infinite',
              }}
            >
              {/* First set */}
              <div className="flex space-x-8 shrink-0">
                <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg min-w-32">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-3">
                    <span className="text-2xl">⚛️</span>
                  </div>
                  <span className="font-semibold text-slate-800 dark:text-white">React</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg min-w-32">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-900 rounded-xl flex items-center justify-center mb-3">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <span className="font-semibold text-slate-800 dark:text-white">Next.js</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg min-w-32">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-3">
                    <span className="text-2xl">📘</span>
                  </div>
                  <span className="font-semibold text-slate-800 dark:text-white">TypeScript</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg min-w-32">
                  <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900 rounded-xl flex items-center justify-center mb-3">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <span className="font-semibold text-slate-800 dark:text-white">Tailwind</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg min-w-32">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mb-3">
                    <span className="text-2xl">🟢</span>
                  </div>
                  <span className="font-semibold text-slate-800 dark:text-white">Node.js</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg min-w-32">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-3">
                    <span className="text-2xl">🍃</span>
                  </div>
                  <span className="font-semibold text-slate-800 dark:text-white">MongoDB</span>
                </div>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-8 shrink-0">
                <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg min-w-32">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-3">
                    <span className="text-2xl">⚛️</span>
                  </div>
                  <span className="font-semibold text-slate-800 dark:text-white">React</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg min-w-32">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-900 rounded-xl flex items-center justify-center mb-3">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <span className="font-semibold text-slate-800 dark:text-white">Next.js</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg min-w-32">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-3">
                    <span className="text-2xl">📘</span>
                  </div>
                  <span className="font-semibold text-slate-800 dark:text-white">TypeScript</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg min-w-32">
                  <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900 rounded-xl flex items-center justify-center mb-3">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <span className="font-semibold text-slate-800 dark:text-white">Tailwind</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg min-w-32">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mb-3">
                    <span className="text-2xl">🟢</span>
                  </div>
                  <span className="font-semibold text-slate-800 dark:text-white">Node.js</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg min-w-32">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-3">
                    <span className="text-2xl">🍃</span>
                  </div>
                  <span className="font-semibold text-slate-800 dark:text-white">MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clients Carousel */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white text-center mb-8">Trusted by Clients</h3>
          <div className="overflow-hidden">
            <div
              className="flex space-x-12"
              style={{
                animation: 'scrollReverse 25s linear infinite',
              }}
            >
              {/* First set */}
              <div className="flex space-x-12 shrink-0">
                <div className="flex items-center justify-center p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg min-w-48 h-24">
                  <span className="text-xl font-bold text-slate-600 dark:text-slate-400">TechCorp</span>
                </div>
                <div className="flex items-center justify-center p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg min-w-48 h-24">
                  <span className="text-xl font-bold text-slate-600 dark:text-slate-400">InnovateLab</span>
                </div>
                <div className="flex items-center justify-center p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg min-w-48 h-24">
                  <span className="text-xl font-bold text-slate-600 dark:text-slate-400">StartupCo</span>
                </div>
                <div className="flex items-center justify-center p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg min-w-48 h-24">
                  <span className="text-xl font-bold text-slate-600 dark:text-slate-400">DigitalWorks</span>
                </div>
                <div className="flex items-center justify-center p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg min-w-48 h-24">
                  <span className="text-xl font-bold text-slate-600 dark:text-slate-400">CloudSystems</span>
                </div>
                <div className="flex items-center justify-center p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg min-w-48 h-24">
                  <span className="text-xl font-bold text-slate-600 dark:text-slate-400">WebStudio</span>
                </div>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-12 shrink-0">
                <div className="flex items-center justify-center p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg min-w-48 h-24">
                  <span className="text-xl font-bold text-slate-600 dark:text-slate-400">TechCorp</span>
                </div>
                <div className="flex items-center justify-center p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg min-w-48 h-24">
                  <span className="text-xl font-bold text-slate-600 dark:text-slate-400">InnovateLab</span>
                </div>
                <div className="flex items-center justify-center p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg min-w-48 h-24">
                  <span className="text-xl font-bold text-slate-600 dark:text-slate-400">StartupCo</span>
                </div>
                <div className="flex items-center justify-center p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg min-w-48 h-24">
                  <span className="text-xl font-bold text-slate-600 dark:text-slate-400">DigitalWorks</span>
                </div>
                <div className="flex items-center justify-center p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg min-w-48 h-24">
                  <span className="text-xl font-bold text-slate-600 dark:text-slate-400">CloudSystems</span>
                </div>
                <div className="flex items-center justify-center p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg min-w-48 h-24">
                  <span className="text-xl font-bold text-slate-600 dark:text-slate-400">WebStudio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
