// src/App.jsx

import { useState, useEffect, useRef } from "react";
import missions from "./data/missions";
import rewards from "./data/Rewards";
import Home from "./pages/Home";
import Rewards from "./pages/Rewards";
import ProgressBar from "./components/ProgressBar";
import RewardModal from "./components/RewardModal";
import AudioPlayer from "./components/AudioPlayer";

function App() {
  const [completedTasks, setCompletedTasks] = useState(() => {
    const savedTasks = localStorage.getItem("completedTasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [isStarted, setIsStarted] = useState(false);
  const [unlockedReward, setUnlockedReward] = useState(null);
  const audioPlayerRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));

    const newUnlockedReward = rewards.find(
      (reward) => reward.requirement === completedTasks.length && completedTasks.length > 0
    );

    if (newUnlockedReward) {
      setUnlockedReward(newUnlockedReward);
    }
  }, [completedTasks]);

  const handleStart = () => {
    setIsStarted(true);
    if (audioPlayerRef.current) {
      audioPlayerRef.current.play();
    }
  };
  
  const handleCompleteTask = (missionId) => {
    if (!completedTasks.includes(missionId)) {
        setCompletedTasks([...completedTasks, missionId]);
    }
  };

  // ----- Lógica de apresentação (perfeita, sem alterações) -----
  if (!isStarted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center relative">
        <div className="w-full max-w-md p-6 bg-black bg-opacity-40 rounded-2xl shadow-lg">
          <h1 className="text-5xl font-bold mb-4 text-white" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
            Missão: Aniversário
          </h1>
          <p className="text-xl text-white mb-8" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
            Um presente de aniversário especial!
          </p>
          <button
            onClick={handleStart}
            className="bg-blue-500 text-white px-10 py-4 rounded-full font-semibold text-lg transition hover:bg-blue-600 shadow-xl transform hover:scale-105"
          >
            Começar a Aventura!
          </button>
        </div>
      </div>
    );
  }

  const unlockedRewards = rewards.filter(
    (reward) => reward.requirement <= completedTasks.length
  );

  const currentMission = missions.find(
    (mission) => !completedTasks.includes(mission.id)
  );

  // ----- JSX principal (perfeito, sem alterações) -----
  return (
    <div className="min-h-screen bg-blue-50 p-4 sm:p-8 flex items-center justify-center">
      <main className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-10">
        
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-blue-700">
         Missão: Aniversário
        </h1>

        <ProgressBar completed={completedTasks.length} total={missions.length} />

        <div className="my-8 sm:my-12">
          <Home
            mission={currentMission}
            completedTasks={completedTasks}
            onCompleteTask={handleCompleteTask}
          />
        </div>

        <div className="pt-8 sm:pt-12 border-t-2 border-blue-100">
          <Rewards
            rewards={unlockedRewards}
            completedCount={completedTasks.length}
          />
        </div>
      </main>

      <RewardModal
        reward={unlockedReward}
        onClose={() => setUnlockedReward(null)}
      />

      <AudioPlayer 
        ref={audioPlayerRef}
        src="/background-music.mp3"
      />
    </div>
  );
}

export default App;