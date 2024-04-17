import evaluAtIcon from '../assets/evaluAtIcon.svg';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

export function LoginPage() {
  return (
    <div className="gap-4 flex flex-col">
      <img className="" src={evaluAtIcon} />
      <Input className="rounded text-slate-600/90" placeholder="E-mail" />
      <Input className="rounded text-slate-600/90" placeholder="Password" />
      <Button className="mt-3 rounded hover:bg-slate-700 text-white bg-slate-950">
        Entrar
      </Button>
      <span className="text-slate-600">
        Ainda não tem conta?{' '}
        <a className=" underline" href="">
          Clique Aqui.
        </a>{' '}
      </span>
    </div>
  );
}
