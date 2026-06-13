import Link from 'next/link';

export default function ServerCard({ servidor }) {
  return (
    <div className="bg-gray-900 border border-yellow-900/30 rounded-xl overflow-hidden hover:border-yellow-500/50 transition-all duration-300">
      <div className="h-48 bg-gray-800 relative">
        <img
          src={servidor.imagem}
          alt={servidor.nome}
          className="w-full h-full object-cover"
        />
        {servidor.destaque && (
          <span className="absolute top-3 right-3 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
            {servidor.destaque}
          </span>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-yellow-500 mb-2">{servidor.nome}</h3>
        <p className="text-gray-400 mb-4">{servidor.descricao}</p>
        
        <div className="flex gap-2 mb-4">
          {servidor.xp && <span className="bg-gray-800 text-yellow-400 px-3 py-1 rounded-full text-sm">{servidor.xp}</span>}
          {servidor.drop && <span className="bg-gray-800 text-yellow-400 px-3 py-1 rounded-full text-sm">{servidor.drop}</span>}
        </div>

        <div className="flex gap-3">
          {servidor.site && (
            <Link href={servidor.site} target="_blank" className="flex-1 bg-red-700 hover:bg-red-600 text-white text-center py-2 rounded-lg font-bold">
              Site
            </Link>
          )}
          {servidor.discord && (
            <Link href={servidor.discord} target="_blank" className="flex-1 bg-gray-700 hover:bg-gray-600 text-yellow-400 text-center py-2 rounded-lg font-bold">
              Discord
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
