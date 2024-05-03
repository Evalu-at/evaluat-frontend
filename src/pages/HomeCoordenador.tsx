import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const FormSchema = z.object({
  nome_turma: z.string().min(6, {
    message: 'Seu nome de turma deve ter no mínimo 6 caracteres.',
  }),
});

export function HomeCoordenador() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nome_turma: '',
    },
    mode: 'onChange',
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log(values);
  }

  return (
    <div className="absolute flex flex-col place-self-center">
      <h1 className="text-center font-inter text-[48px] font-bold text-[#0F172A]">
        Olá, "nome"!
      </h1>
      <p className="font-inter text-[18px] font-semibold place-self-center">
        Por favor, crie a sua turma!
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="items-center justify-center flex flex-col gap-4 mt-4"
        >
          <FormField
            control={form.control}
            name="nome_turma"
            render={({ field }) => (
              <FormItem className="flex gap-3">
                <FormControl>
                  <Input
                    {...field}
                    className="rounded mt-2 w-[271px]"
                    placeholder="Nome da turma"
                  />
                </FormControl>
                <Button
                  type="submit"
                  className="hover:bg-slate-500 text-white bg-slate-900 rounded"
                  disabled={!form.formState.isValid}
                  onClick={form.handleSubmit(onSubmit)}
                >
                  Criar
                </Button>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}
