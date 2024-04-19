import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: 'Seu código deve ter no mínimo 6 caracteres.',
  }),
});

export function TfPage() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: '',
    },
  });
  function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log(values);
  }

  return (
    <div className="absolute flex flex-col place-self-center">
      <h1 className="text-center font-inter text-[48px] font-bold text-[#0F172A]">
        Olá, "nome"
      </h1>
      <p className="font-inter text-[18px] font-semibold">
        Por favor, insira o código que chegou ao seu email!
      </p>
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            <FormField
              control={form.control}
              name="pin"
              render={({ field }) => (
                <FormItem className="flex">
                  <FormControl className="mr-4">
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} className="rounded-l" />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} className="rounded-r" />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <Button
                    type="submit"
                    className="hover:bg-slate-700 text-white bg-slate-900 rounded"
                  >
                    Entrar
                  </Button>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </div>
  );
}
