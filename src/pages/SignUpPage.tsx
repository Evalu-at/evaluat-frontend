// SignUpPage.tsx
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import z from 'zod';
import { useNavigate, Link } from 'react-router-dom';
import { addUser, sendOtp } from '../services/UserService';
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
  const navigate = useNavigate();
  const { setError } = useForm();
  const formSchema = z.object({
    email: z.string().email({ message: 'Formato de e-mail inválido' }),
    senha: z.string().min(8, { message: 'Senha muito curta!' }),
    confirmPassword: z.string().min(8, { message: 'Senha muito curta!' }),
    nome: z.string(),
    cargo: z
      .string()
      .refine(
        (DefineRole) => DefineRole === 'Aluno' || DefineRole === 'Coordenador',
      ),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      senha: '',
      confirmPassword: '',
      cargo: '',
      nome: '',
    },
    mode: 'onBlur',
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.senha !== values.confirmPassword) {
      // Exibir mensagem de erro caso as senhas não coincidam
      form.setError('confirmPassword', {
        type: 'manual',
        message: 'As senhas não coincidem!',
      });
      return;
    } else {
      try {
        const addUserStatus = await addUser(values);
        if (addUserStatus === 200) {
          const otpStatus = await sendOtp({ email: values.email });
          if (otpStatus === 200) {
            navigate('/otp', {
              state: { emailData: { email: values.email }, nome: values.nome },
            });
          }
        }
      } catch (error) {
        // Handle errors here if needed
        console.error('Error during sign up process:', error);
      }
    }
  }
  return (
    <div className="absolute flex flex-col place-self-center gap-2">
      <img className="pb-[35px] px-6" src={evaluAtIcon} />
      <Form {...form}>
        <form className="flex flex-col" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="nome"
            control={form.control}
            render={({ field }) => (
              <FormItem className="pb-2">
                <FormControl>
                  <Input
                    type="text"
                    className="rounded text-slate-700"
                    placeholder="Nome Completo"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
            name="senha"
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
            name="cargo"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="rounded h-[42px] p-[5px] border border-slate-300 flex">
                    <Button
                      variant="nohover"
                      type="button"
                      className={`flex-grow h-full transition-colors duration-700
                      ${form.watch('cargo') === 'Aluno' ? 'bg-slate-900 text-white' : 'text-gray-900'} 
                      rounded flex justify-center items-center cursor-pointer`}
                      onClick={() => {
                        form.setValue('cargo', 'Aluno');
                        form.trigger('cargo');
                      }}
                    >
                      Aluno
                    </Button>
                    <Button
                      variant="nohover"
                      type="button"
                      className={`flex-grow h-full transition-colors duration-700
                      ${form.watch('cargo') === 'Coordenador' ? 'bg-slate-900 text-white' : 'text-gray-900'}
                      rounded flex justify-center items-center cursor-pointer`}
                      onClick={() => {
                        form.setValue('cargo', 'Coordenador');
                        form.trigger('cargo');
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
