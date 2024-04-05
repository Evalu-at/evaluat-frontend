import evaluAtIcon from '../assets/evaluAtIcon.svg';
import { Input } from '../components/input';
import { Button } from '../components/button';

export function LoginPage() {
  return (
    <div className="gap-5 flex flex-col">
      <img className="" src={evaluAtIcon} />
      <Input className="rounded" placeholder="E-mail" />
      <Input className="rounded" placeholder="Password" />
      <Button className="hover:bg-slate-700 text-white bg-slate-950">
        fon
      </Button>
    </div>
  );
}
