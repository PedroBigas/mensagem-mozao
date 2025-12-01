export default function Ryan() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      {/* Caveiras animadas no background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="skull"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          >
            💀
          </div>
        ))}
      </div>

      {/* Conteúdo principal */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-8 text-center">
        <div className="w-full max-w-md space-y-6 rounded-3xl bg-gray-900/80 p-6 shadow-2xl backdrop-blur-sm sm:p-8 md:p-10 border border-gray-700">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Ryan
          </h1>
          
          <div className="space-y-3">
            <p className="text-2xl font-semibold text-gray-300 sm:text-3xl md:text-4xl">
              Mensagem Especial
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl">💀</p>
          </div>

          <div className="pt-4 space-y-2 text-gray-300">
            <p className="text-base sm:text-lg opacity-80">
              Você já parou para pensar que...
            </p>
            <p className="text-sm sm:text-base text-gray-400 italic">
              "Bob Esponja vive em um abacaxi no fundo do mar"
            </p>
            <p className="text-lg font-bold text-white sm:text-xl md:text-2xl mt-4 opacity-60">
              🍍 🧽 🌊
            </p>
            <p className="text-xs text-gray-500 mt-6 opacity-50">
              A vida é como uma esponja: absorve tudo ao redor
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

