const clients = [
    {
        name: "Fonderie Art Inverness",
        logo: "https://fonderieart.com/wp-content/uploads/2021/09/logo-footer-fonderie-art-inverness.png",
        website: "fonderieart.com"
    },
    {
        name: "Your Company Here",
        logo: "https://imgs.search.brave.com/zftP2kassiSuxuJxw6-WPg5pa7tkl-vm6mR0jthppd8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc_dD02Mzgy/ODM5NzYyMTAwMDAw/MDA",
        website: "#",
        isPlaceholder: true
    },
    {
        name: "La maison en bois rond",
        logo: "https://www.lamaisonenboisrond.ca/wp-content/uploads/2024/01/maison_bois_rond_logo-removebg-preview-300x300.png",
        website: "lamaisonenboisrond.ca"
    },
];

function ClientCard({ client }: { client: typeof clients[0] }) {
    return (
        <a
            href={client.website}
            target={client.isPlaceholder ? "_self" : "_blank"}
            rel={client.isPlaceholder ? "" : "noopener noreferrer"}
            className="group flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg min-w-48 h-32 hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
            <div className="w-20 h-20 group-hover:scale-110 transition-transform duration-300">
                <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="w-full h-full object-contain rounded-lg"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://via.placeholder.com/80x80/6B7280/FFFFFF?text=Logo";
                    }}
                />
            </div>
        </a>
    );
}

export function ClientsCarousel() {
    return (
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
                        {clients.map((client, index) => (
                            <ClientCard key={`first-${index}`} client={client} />
                        ))}
                    </div>
                    {/* Duplicate set for seamless loop */}
                    <div className="flex space-x-12 shrink-0">
                        {clients.map((client, index) => (
                            <ClientCard key={`second-${index}`} client={client} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}