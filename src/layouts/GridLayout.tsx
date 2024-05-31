import { Outlet } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { BgIconLayout } from './BgIconLayout';
import useAuth from '@/hooks/UseAuth';
import UserpopOver from '../components/UserPopOver';

export function GridLayout() {
  const { user } = useAuth();

  return (
    <div className="px-[89px] py-[50px] h-screen w-screen flex justify-center">
      <Toaster />
      {user && (
        <div className="absolute flex">
          <UserpopOver />
        </div>
      )}
      <BgIconLayout />
      <div className="relative min-h-full min-w-full grid grid-cols-12 gap-[34px]">
        <div className="bg-black/10" />
        <div className="bg-black/10" />
        <div className="bg-black/10" />
        <div className="bg-black/10" />
        <div className="bg-black/10" />
        <div className="bg-black/10" />
        <div className="bg-black/10" />
        <div className="bg-black/10" />
        <div className="bg-black/10" />
        <div className="bg-black/10" />
        <div className="bg-black/10" />
        <div className="bg-black/10" />
      </div>
      <Outlet />

      <div className="absolute text-[#0F172A] text-xs font-inter bottom-0 place-self-center">
        Evaluat.at — 2023 © Todos os direitos reservados
      </div>
    </div>
  );
}
