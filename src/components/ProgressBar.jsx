export default function ProgressBar({ completed, total }) {
  const percentage = total > 0 ? (completed / total) * 100 : 0;

  return (
    <div className="max-w-2xl mx-auto my-6">
      <h3 className="text-center text-blue-600 font-semibold mb-2">
        Progresso das Missões: {completed} de {total}
      </h3>
      <div className="w-full bg-blue-200 rounded-full h-4">
        <div
          className="bg-blue-500 h-4 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}