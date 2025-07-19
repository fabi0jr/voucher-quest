import MissionCard from "../components/MissionCard"

export default function Home({ mission, completedTasks, onCompleteTask }) {
  return (
    <div className="max-w-xl mx-auto">
      {mission ? (
        // Se existir uma missão atual, mostre o card dela
        <MissionCard
          key={mission.id}
          mission={mission}
          isCompleted={completedTasks.includes(mission.id)}
          onComplete={onCompleteTask}
        />
      ) : (
        // Se não, mostre a mensagem de conclusão
        <div className="p-6 rounded-xl shadow-md bg-green-100 border border-green-300 text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-2">Parabéns! 🥳</h2>
          <p className="text-green-600">
            Você concluiu todas as missões! Agora aproveite suas recompensas.
          </p>
        </div>
      )}
    </div>
  )
}
