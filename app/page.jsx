import ServerCard from '@/components/ServerCard';

// Dados dos servidores (você edita isso!)
const servidores = [
  {
    id: 1,
    nome: "MU Dragon Season 18",
    descricao: "Servidor Season 18 com rates 5x, sistema de upgrades moderno e comunidade ativa.",
    imagem: "/images/servidores/mu-dragon.jpg",
    destaque: "🔥 TOP 1",
    xp: "5x XP",
    drop: "2x Drop",
    site: "https://exemplo.com",
    discord: "https://discord.gg/exemplo"
  },
  {
    id: 2,
    nome: "MU Legends Premium",
    descricao: "Servidor VIP com sistema anti-cheat, eventos exclusivos.",
    imagem: "/images/servidores/mu-legends.gif",
    destaque: "⭐ VIP",
    xp: "10x XP",
    drop: "5x Drop",
    site: "https://exemplo2.com",
    discord: "https://discord.gg/exemplo2"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-yellow-500 mb-4">Guide MU Premium</h1>
          <p className="text-xl text-gray-400">O portal definitivo de MU Online</p>
        </div>
      </section>

      {/* Seção de Servidores */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-yellow-500 mb-12">Servidores em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servidores.map((servidor) => (
              <ServerCard key={servidor.id} servidor={servidor} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
