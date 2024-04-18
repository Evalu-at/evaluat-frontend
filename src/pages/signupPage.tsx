import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import z from 'zod';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import evaluAtIcon from '../assets/evaluAtIcon.svg';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

export function SignUpPage() {
  const [role, setRole] = useState('aluno');
  return (
    <div className="gap-2 flex flex-col">
      <img className="" src={evaluAtIcon} />
      <Input className="rounded text-slate-600/90" placeholder="E-mail" />
      <Input className="rounded text-slate-600/90" placeholder="Senha" />
      <Input
        className="rounded text-slate-600/90"
        placeholder="Confirme sua senha"
      />
      <div className="rounded w-[422px] h-[42px] p-[5px] border border-slate-300 flex">
        <div
          className={`flex-grow h-full transition-colors duration-700 
          ${role === 'aluno' ? 'bg-slate-900 text-white' : 'text-gray-900'} 
          rounded flex justify-center items-center cursor-pointer`}
          onClick={() => setRole('aluno')}
        >
          Aluno
        </div>
        <div
          className={`flex-grow h-full transition-colors duration-700 
          ${role === 'coordenador' ? 'bg-slate-900 text-white' : 'text-gray-900'}
          rounded flex justify-center items-center cursor-pointer`}
          onClick={() => setRole('coordenador')}
        >
          Coordenador
        </div>
      </div>
      <Button className="mt-5 rounded hover:bg-slate-700 text-white bg-slate-900">
        Registrar
      </Button>
      <span className="text-slate-600">
        Já tem conta?{' '}
        <a className="underline" href="/login">
          Clique Aqui.
        </a>
      </span>
    </div>
  );
}
