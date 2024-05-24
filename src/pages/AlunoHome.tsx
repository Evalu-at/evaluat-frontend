import { Button } from '@/components/ui/button';

export default function AlunoHome() {
  const handleSkip = () => {
    console.log('Skipped');
  };

  const handleAdvance = () => {
    console.log('Advanced');
  };

  return (
    <div className="min-h-screen flex flex-col items-start p-10">
      <div className="mb-4">
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded">
          DESGN20231_A
        </button>
      </div>
      <h1 className="text-2xl font-semibold mb-10">Minhas avaliações</h1>
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">
            Vamos finalizar o seu perfil?
          </h2>
          <p className="mb-6">
            Esta etapa é essencial para uma melhor experiência na plataforma!
          </p>
          <div className="flex justify-end space-x-4">
            <Button onClick={handleSkip} variant="outline">
              Pular
            </Button>
            <Button onClick={handleAdvance} variant="default">
              Avançar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
