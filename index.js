// pages/index.js (Next.js)
import { useState } from 'react';

export default function Home() {
  const [cidade, setCidade] = useState('Porto Alegre');
  const [precoMax, setPrecoMax] = useState(150);

  const instrutores = [
    { id: 1, nome: 'João Silva', rating: 4.9, preco: 120, cidade: 'Porto Alegre' },
    // Mais dados do Supabase
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 p-8">
      <h1 className="text-4xl font-bold text-white text-center mb-12">Aulas de Direção Fáceis</h1>
      
      <div className="max-w-2xl mx-auto bg-white/80 rounded-2xl p-8 shadow-2xl">
        <input
          placeholder="Cidade (ex: Porto Alegre)"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          className="w-full p-4 border rounded-xl mb-4 text-lg"
        />
        <input
          type="range" min="50" max="200"
          value={precoMax}
          onChange={(e) => setPrecoMax(e.target.value)}
          className="w-full mb-6"
        />
        <p>Preço máx: R$ {precoMax}</p>

        <div className="grid gap-4">
          {instrutores
            .filter(i => i.preco <= precoMax && i.cidade.includes(cidade))
            .map(i => (
              <div key={i.id} className="p-6 border rounded-xl hover:shadow-xl transition">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-xl">{i.nome}</h3>
                    <p className="text-3xl text-emerald-600">R$ {i.preco}/aula</p>
                    <p>{i.cidade} • ★ {i.rating}</p>
                  </div>
                  <button className="bg-blue-500 text-white px-8 py-3 rounded-xl font-semibold">
                    Ver Agenda
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
