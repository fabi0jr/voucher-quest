// src/components/MissionCard.jsx - Versão Limpa

export default function MissionCard({ mission, isCompleted, onComplete }) {
  return (
    <div className={`p-4 rounded-xl shadow-md transition-all border ${isCompleted ? "bg-green-100 border-green-300" : "bg-white border-pink-300"}`}>
      <h2 className="text-xl font-bold mb-2">{mission.title}</h2>
      {/* CORREÇÃO: "text-x" alterado para "text-base" (tamanho de fonte padrão) */}
      <p className="text-base mb-4 text-gray-700 text-center">{mission.description}</p>
      <div className="text-center mt-4">
        <button
          onClick={() => onComplete(mission.id)}
          disabled={isCompleted}
          className={`px-4 py-2 rounded-full font-semibold transition ${
            isCompleted
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-pink-500 text-white hover:bg-pink-600"
          }`}
        >
          {isCompleted ? "Concluída 🎉" : "Concluir"}
        </button>
      </div>
    </div>
  )
}