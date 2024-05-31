import { Link } from 'react-router-dom';

export function Dashboard() {
  return (
    <div className="absolute flex flex-col place-items-center place-self-center gap-5">
      <h1>Dashboard</h1>
      <Link to="/home-coordenador">Home</Link>
      <Link to="/aluno">Aluno</Link>
    </div>
  );
}
