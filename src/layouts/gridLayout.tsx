import { BgIconLayout } from './bgIconLayout';

export function GridLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-[50px] py-20  h-screen w-screen flex justify-center items-center">
      <div className=" min-h-full min-w-full grid grid-cols-12 gap-[34px]">
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
        <div className="absolute flex place-self-center">{children}</div>
      </div>
      <BgIconLayout />
      <div className="absolute text-[#0F172A] text-xs font-inter bottom-0 place-self-center">
        Evaluat.at — 2023 © Todos os direitos reservados
      </div>
    </div>
  );
}
