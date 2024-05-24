import { Link } from 'react-router-dom';

export function Dashboard() {
  return (
    <div className="flex flex-col gap-5">
      <h1>Dashboard</h1>
      <Link to="/home-coordenador">Home</Link>
      <Link to="/aluno">Aluno</Link>
    </div>
  );
}
