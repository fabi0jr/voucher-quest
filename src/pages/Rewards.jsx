import RewardCard from "../components/RewardCard";

export default function Rewards({ rewards, completedCount }) {
  return (
    <div className="max-w-3xl mx-auto grid gap-6">
      <h2 className="text-2xl font-bold text-pink-600 text-center mb-4">
        Suas Recompensas 💝
      </h2>

      {/* Se não houver recompensas desbloqueadas, mostre uma mensagem */}
      {rewards.length === 0 ? (
        <p className="text-center text-gray-500 bg-white p-4 rounded-xl shadow-md">
          Conclua missões para desbloquear suas recompensas! 🎁
        </p>
      ) : (
        // Caso contrário, mostre as recompensas desbloqueadas
        rewards.map((reward) => (
          <RewardCard
            key={reward.id}
            reward={reward}
            completedCount={completedCount}
          />
        ))
      )}
    </div>
  )
}