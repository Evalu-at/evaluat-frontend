import evaluAtIcon from '../assets/evaluAtIcon.svg';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
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

export function LoginPage() {
  const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(2, { message: 'Senha muito curta' }),
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
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="gap-5 flex flex-col">
      <img className="" src={evaluAtIcon} />
      <Form {...form}>
        <form className="flex flex-col gap-3">
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="rounded text-slate-400"
                    placeholder="Email"
                    {...field}
                  />
                </FormControl>
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
                    className="rounded text-slate-400"
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
          >
            Entrar
          </Button>
        </form>
      </Form>

      <span className="text-slate-600">
        Ainda não tem conta?{' '}
        <a className=" underline" href="">
          Clique Aqui.
        </a>
      </span>
    </div>
  );
}
