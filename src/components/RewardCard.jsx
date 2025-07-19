export default function RewardCard({ reward, completedCount }) {
  const unlocked = completedCount >= reward.requirement

  return (
    // Usamos um `div` em vez de `a` para o card principal
    <div className={`p-4 rounded-xl shadow-md transition-all border ${unlocked ? "bg-yellow-100 border-yellow-400" : "bg-white border-gray-300 opacity-60"}`}>
      <div className="flex justify-between items-start">
        {/* Informações da Recompensa */}
        <div>
          <h2 className="text-xl font-bold mb-2 text-black">{reward.title}</h2>
          <p className="text-gray-800 mb-2">{reward.description}</p>
        </div>

        {/* Botão de Download */}
        {unlocked && (
          <a
            href={reward.pdfUrl}
            download
            className="ml-4 flex-shrink-0 bg-pink-500 text-white px-4 py-2 rounded-full font-semibold transition hover:bg-pink-600 shadow-md text-sm"
          >
            Baixar Voucher
          </a>
        )}
      </div>

      <div className="text-sm text-gray-600 mt-4 border-t border-yellow-300 pt-2">
        {unlocked
          ? "✅ Recompensa desbloqueada!"
          : `🔒 Complete ${reward.requirement} missão(ões) para desbloquear`}
      </div>
    </div>
  );
}
