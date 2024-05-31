import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Radio, RadioGroup } from '@radix-ui/react-radio-group';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Select } from '@/components/ui/select';

export default function ProfilePage() {
  return (
    <div className="p-8 mx-auto ">
      <div>
        <h2 className="text-2xl font-semibold">Perfil</h2>
        <p className="text-sm text-gray-600">
          Personalize seu perfil de acordo com suas preferências
        </p>

        <div className="flex space-x-6">
          <div className="flex items-center">
            <Avatar className="bg-slate-600 text-white">
              <AvatarFallback>JV</AvatarFallback>
            </Avatar>
            <Button className="flex pl-4 bg-gray-500/20 text-slate-900 font-inter rounded">
              Upload da foto
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
