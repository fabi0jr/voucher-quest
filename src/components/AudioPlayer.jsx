// src/components/AudioPlayer.jsx
import { useState, useRef, useImperativeHandle, forwardRef, useEffect } from 'react';

function AudioPlayer({ src }, ref) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // NOVO: Efeito para definir o volume inicial
  useEffect(() => {
    if (audioRef.current) {
      // Define o volume para 20%. Você pode mudar este valor (de 0.0 a 1.0)
      audioRef.current.volume = 0.2;
    }
  }, []); // O array vazio [] garante que isso rode apenas uma vez

  // Expõe a função play para o componente pai (App.jsx)
  useImperativeHandle(ref, () => ({
    play() {
      audioRef.current.play();
      setIsPlaying(true);
    },
    pause() {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }));

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src={src} loop />
      <button 
        onClick={togglePlayPause}
        className="fixed bottom-4 right-4 bg-blue-500 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center focus:outline-none z-50"
        aria-label={isPlaying ? "Pausar música" : "Tocar música"}
      >
        {isPlaying ? '❚❚' : '▶'}
      </button>
    </>
  );
}

export default forwardRef(AudioPlayer);