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
import { Button, buttonVariants } from '../components/ui/button';
import { Input } from '../components/ui/input';

export function SignUpPage() {
  const formSchema = z.object({
    email: z.string().email({ message: 'Formato de e-mail inválido' }),
    password: z.string().min(8, { message: 'Senha muito curta!' }),
    confirmPassword: z.string().min(8, { message: 'Senha muito curta!' }),
    role: z
      .string()
      .refine(
        (DefineRole) => DefineRole === 'aluno' || DefineRole === 'coordenador',
      ),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      role: '',
    },
    mode: 'onBlur',
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.password !== values.confirmPassword) {
      // Exibir mensagem de erro caso as senhas não coincidam
      form.setError('confirmPassword', {
        type: 'manual',
        message: 'As senhas não coincidem!',
      });
      return;
    }
    // Continuar com o envio do formulário
    console.log(values);
  }

  return (
    <div className="absolute flex flex-col place-self-center gap-2">
      <img className="pb-[35px] px-6" src={evaluAtIcon} />
      <Form {...form}>
        <form className="flex flex-col" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem className="pb-2">
                <FormControl>
                  <Input
                    type="email"
                    className="rounded text-slate-700"
                    placeholder="Email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem className="pb-2">
                <FormControl>
                  <Input
                    type="password"
                    className="rounded text-slate-700"
                    placeholder="Senha"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="confirmPassword"
            control={form.control}
            render={({ field }) => (
              <FormItem className="pb-2">
                <FormControl>
                  <Input
                    type="password"
                    className="rounded text-slate-700"
                    placeholder="Confirme sua senha"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="role"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="rounded h-[42px] p-[5px] border border-slate-300 flex">
                    <Button
                      variant="nohover"
                      type="button"
                      className={`flex-grow h-full transition-colors duration-700
                      ${form.watch('role') === 'aluno' ? 'bg-slate-900 text-white' : 'text-gray-900'} 
                      rounded flex justify-center items-center cursor-pointer`}
                      onClick={() => {
                        form.setValue('role', 'aluno');
                        form.trigger('role');
                      }}
                    >
                      Aluno
                    </Button>
                    <Button
                      variant="nohover"
                      type="button"
                      className={`flex-grow h-full transition-colors duration-700
                      ${form.watch('role') === 'coordenador' ? 'bg-slate-900 text-white' : 'text-gray-900'}
                      rounded flex justify-center items-center cursor-pointer`}
                      onClick={() => {
                        form.setValue('role', 'coordenador');
                        form.trigger('role');
                      }}
                    >
                      Coordenador
                    </Button>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <FormItem>
            <Button
              type="submit"
              className="mt-5 rounded hover:bg-slate-700 text-white bg-slate-900 w-full"
              disabled={!form.formState.isValid}
            >
              Registrar
            </Button>
          </FormItem>
        </form>
      </Form>
      <div className="text-slate-500">
        Já tem conta?{' '}
        <Link className="underline" to="/login">
          Clique Aqui.
        </Link>
      </div>
    </div>
  );
}
