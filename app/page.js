export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-pink-200 via-red-200 to-purple-200">
      {/* Corações animados no background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Conteúdo principal */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-8 text-center">
        <div className="w-full max-w-md space-y-6 rounded-3xl bg-white/80 p-6 shadow-2xl backdrop-blur-sm sm:p-8 md:p-10">
          <h1 className="text-4xl font-bold text-pink-600 sm:text-5xl md:text-6xl">
            Oraggio
          </h1>
          
          <div className="space-y-3">
            <p className="text-2xl font-semibold text-red-500 sm:text-3xl md:text-4xl">
              Eu te amo
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl">💕</p>
          </div>

          <div className="pt-4 space-y-2 text-gray-700">
            <p className="text-base sm:text-lg">
              <span className="font-semibold text-pink-600">Pedro Bigas</span> ❤️{" "}
              <span className="font-semibold text-pink-600">Gabriel Oraggio</span>
            </p>
            <p className="text-sm sm:text-base text-gray-600">
              Juntos desde o nascimento
            </p>
            <p className="text-lg font-bold text-purple-600 sm:text-xl md:text-2xl">
              Amor para sempre! 💖
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
