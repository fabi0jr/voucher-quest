// src/components/RewardModal.jsx - Versão Limpa

export default function RewardModal({ reward, onClose }) {
  if (!reward) return null;

  return (
    // A classe 'animate-fade-in-up' já existe no index.css
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-8 text-center shadow-2xl max-w-sm transform transition-all animate-fade-in-up">
        <h2 className="text-2xl font-bold text-yellow-500 mb-2">🎉 Recompensa Desbloqueada! 🎉</h2>
        <h3 className="text-xl font-bold text-pink-600 mb-4">{reward.title}</h3>
        <p className="text-gray-700 mb-6">{reward.description}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold transition hover:bg-blue-600"
        >
          Continuar Missões
        </button>
      </div>
    </div>
  );
}
