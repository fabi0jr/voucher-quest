import { useState } from 'react';

export default function MissionCard({ mission, isCompleted, onComplete }) {
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState('');

  const handleValidation = () => {
    // Verifica se a senha digitada é a correta
    if (passwordInput.toLowerCase() === mission.password.toLowerCase()) {
      // Se for, chama a função para completar a task
      onComplete(mission.id);
      setError(''); // Limpa qualquer erro anterior
    } else {
      // Se não, mostra uma mensagem de erro
      setError('Senha incorreta! Tente de novo.');
    }
  };

  // Se a missão já foi concluída, mostra uma mensagem diferente
  if (isCompleted) {
    return (
      <div className="p-4 rounded-xl shadow-md bg-green-100 border border-green-300 text-center">
        <h2 className="text-xl font-bold text-green-700">{mission.title}</h2>
        <p className="text-green-600 mt-2">Missão Concluída! 🎉</p>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-xl shadow-md border bg-white border-pink-300 text-center">
      <h2 className="text-2xl font-bold mb-2">{mission.title}</h2>
      <p className="text-base mb-6 text-gray-700">{mission.description}</p>
      
      <div className="flex flex-col items-center gap-4">
        <input
          type="text"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          placeholder="Digite a senha secreta"
          className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-full text-center focus:ring-2 focus:ring-pink-400 focus:outline-none"
        />
        <button
          onClick={handleValidation}
          className="px-6 py-2 rounded-full font-semibold text-white bg-pink-500 hover:bg-pink-600 transition"
        >
          Validar Missão
        </button>

        {/* Mostra a mensagem de erro se ela existir */}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
    </div>
  );
}