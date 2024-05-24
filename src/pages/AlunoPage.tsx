import { Button } from '@/components/ui/button';

export default function AlunoPage() {
  return (
    <div className="flex place-self-center items-center justify-center absolute min-w-screen">
      <div className="bg-white p-6 rounded-2xl border border-slate-700/10 shadow-2xl">
        <h2 className="text-xl font-inter font-semibold ">
          Sua turma: classCode
        </h2>
        <p className=" mb-6 text-slate-700/70 text-sm font-inter">
          Prossiga se sua turma estiver correta
        </p>
        <div className="ml-72 flex justify-end space-x-4">
          <Button className="px-4 py-2 bg-gray-200 font-inter text-slate-800 rounded hover:bg-slate-300">
            Cancelar
          </Button>
          <Button className="px-4 py-2 bg-black font-inter text-white rounded hover:bg-slate-600">
            Entrar
          </Button>
        </div>
      </div>
    </div>
  );
}
