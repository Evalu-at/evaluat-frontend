import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from './ui/button';
import { useState } from 'react';
import ProfilePage from '../pages/ProfilePage';

export default function UserPopOver() {
  const [selectedContent, setSelectedContent] = useState('perfil');
  const renderContent = () => {
    switch (selectedContent) {
      case 'perfil':
        return <ProfilePage />;
      case 'configuracoes':
        return <div>Configurações Content</div>;
      case 'notificacoes':
        return <div>Notificações Content</div>;
      default:
        return <div>Perfil Content</div>;
    }
  };

  return (
    <div className="h-screen w-screen ">
      <Popover>
        <PopoverTrigger>
          <Avatar className="fixed top-4 left-4 bg-slate-600 text-white  ">
            <AvatarFallback>JV</AvatarFallback>
          </Avatar>
        </PopoverTrigger>

        <PopoverContent className="flex flex-col h-full w-full bg-white">
          <h2 className="text-2xl font-semibold mb-4">
            Gerenciamento de conta
          </h2>
          <div className="flex flex-row">
            <ul className="flex flex-col mb-4">
              <li className="mr-6">
                <Button
                  className="text-slate-900 hover:text-slate-500"
                  onClick={() => setSelectedContent('perfil')}
                >
                  Perfil
                </Button>
              </li>
              <li className="mr-6">
                <Button
                  className="text-slate-900 hover:text-slate-500"
                  onClick={() => setSelectedContent('configuracoes')}
                >
                  Configurações
                </Button>
              </li>
              <li className="mr-6">
                <Button
                  className="text-slate-900 hover:text-slate-500"
                  onClick={() => setSelectedContent('notificacoes')}
                >
                  Notificações
                </Button>
              </li>
            </ul>
            <div className="">{renderContent()}</div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
