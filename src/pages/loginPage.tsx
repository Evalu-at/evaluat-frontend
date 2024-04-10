import evaluAtIcon from '../assets/evaluAtIcon.svg';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BgIconLayout } from '@/layouts/bgIconLayout';
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
import { Link } from 'react-router-dom';

export function LoginPage() {
  const formSchema = z.object({
    email: z.string().email({ message: 'Formato de e-mail inválido' }),
    password: z.string().min(8, { message: 'Senha muito curta' }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="">
      <img className="p-5" src={evaluAtIcon} />
      <Form {...form}>
        <form className="flex flex-col gap-3">
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
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
              <FormItem>
                <FormControl>
                  <Input
                    className="rounded text-slate-700"
                    placeholder="Senha"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="hover:bg-slate-700 text-white bg-slate-950 rounded"
            disabled={!form.formState.isValid}
            onClick={form.handleSubmit(onSubmit)}
          >
            Entrar
          </Button>
        </form>
      </Form>
      <span className="text-slate-600">
        Ainda não tem conta?{' '}
        <Link className=" underline" to="/signup">
          Clique Aqui.
        </Link>
      </span>
    </div>
  );
}
