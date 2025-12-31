interface TechStackItem {
    name: string;
    emoji: string;
    bgColor: string;
}

const techStack: TechStackItem[] = [
    { name: "React", emoji: "⚛️", bgColor: "bg-blue-100 dark:bg-blue-900" },
    { name: "Next.js", emoji: "⚡", bgColor: "bg-gray-100 dark:bg-gray-900" },
    { name: "TypeScript", emoji: "📘", bgColor: "bg-blue-100 dark:bg-blue-900" },
    { name: "Tailwind", emoji: "🎨", bgColor: "bg-cyan-100 dark:bg-cyan-900" },
    { name: "Node.js", emoji: "🟢", bgColor: "bg-green-100 dark:bg-green-900" },
    { name: "MongoDB", emoji: "🍃", bgColor: "bg-purple-100 dark:bg-purple-900" },
    { name: "Express.js", emoji: "🚀", bgColor: "bg-orange-100 dark:bg-orange-900" },
    { name: "PostgreSQL", emoji: "🐘", bgColor: "bg-blue-100 dark:bg-blue-900" },
    { name: "Python", emoji: "🐍", bgColor: "bg-yellow-100 dark:bg-yellow-900" },
    { name: "Docker", emoji: "🐳", bgColor: "bg-blue-100 dark:bg-blue-900" },
    { name: "AWS", emoji: "☁️", bgColor: "bg-orange-100 dark:bg-orange-900" },
    { name: "Git", emoji: "🌿", bgColor: "bg-red-100 dark:bg-red-900" },
    { name: "Redis", emoji: "🔴", bgColor: "bg-red-100 dark:bg-red-900" },
    { name: "GraphQL", emoji: "📊", bgColor: "bg-pink-100 dark:bg-pink-900" },
    { name: "Vue.js", emoji: "💚", bgColor: "bg-green-100 dark:bg-green-900" },
    { name: "Prisma", emoji: "🔷", bgColor: "bg-indigo-100 dark:bg-indigo-900" },
    { name: "Laravel", emoji: "🔥", bgColor: "bg-red-100 dark:bg-red-900" },
    { name: "C#", emoji: "💜", bgColor: "bg-purple-100 dark:bg-purple-900" },
    { name: ".NET", emoji: "🟣", bgColor: "bg-violet-100 dark:bg-violet-900" },
];

function TechStackCard({ tech }: { tech: TechStackItem }) {
    return (
        <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg min-w-32">
            <div className={`w-16 h-16 ${tech.bgColor} rounded-xl flex items-center justify-center mb-3`}>
                <span className="text-2xl">{tech.emoji}</span>
            </div>
            <span className="font-semibold text-slate-800 dark:text-white">{tech.name}</span>
        </div>
    );
}

export function TechStackCarousel() {
    return (
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
                        {techStack.map((tech, index) => (
                            <TechStackCard key={`first-${index}`} tech={tech} />
                        ))}
                    </div>
                    {/* Duplicate set for seamless loop */}
                    <div className="flex space-x-8 shrink-0">
                        {techStack.map((tech, index) => (
                            <TechStackCard key={`second-${index}`} tech={tech} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}