export function GridLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-[50px] py-20  h-screen w-screen flex justify-center items-center">
      <div className="relative min-h-full min-w-full grid grid-cols-12 gap-8">
        <div className="bg-black/10"></div>
        <div className="bg-black/10"></div>
        <div className="bg-black/10"></div>
        <div className="bg-black/10"></div>
        <div className="bg-black/10"></div>
        <div className="bg-black/10"></div>
        <div className="bg-black/10"></div>
        <div className="bg-black/10"></div>
        <div className="bg-black/10"></div>
        <div className="bg-black/10"></div>
        <div className="bg-black/10"></div>
        <div className="bg-black/10"></div>
        <div className="absolute flex flex-col place-self-center">
          {children}
        </div>
        <div className="absolute text-xs font-bold bottom-0 place-self-center">
          Evaluat.at — 2023 © Todos os direitos reservados
        </div>
      </div>
    </div>
  );
}