import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { useLocation, useNavigate } from 'react-router-dom';
import { verifyOtp } from '@/services/UserService';
import { toast } from 'sonner';
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
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: 'Seu código deve ter no mínimo 6 caracteres.',
  }),
});

export function OtpPage() {
  const location = useLocation();
  const nameUser = location.state?.nome.split(' ')[0];
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: '',
    },
    mode: 'onChange',
  });

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    const otpResult = await verifyOtp({
      email: location.state?.emailData,
      pin: values.pin,
    });
    if (otpResult == 200) {
      toast('Uhuuul! ✅', {
        description: 'Código do email validado!',
      });
      navigate('/login');
    }
  }

  return (
    <div className="absolute flex flex-col place-self-center">
      <h1 className="text-center font-inter text-[48px] font-black text-[#0F172A]">
        Olá, {nameUser}!
      </h1>
      <p className="font-inter text-[18px] font-semibold">
        Por favor, insira o código que chegou ao seu email!
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="items-center justify-center flex flex-col gap-4 mt-4"
        >
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem className="flex gap-3">
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot
                        index={0}
                        style={{
                          borderTopLeftRadius: '5px',
                          borderBottomLeftRadius: '5px',
                        }}
                      />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot
                        index={2}
                        style={{
                          borderTopRightRadius: '5px',
                          borderBottomRightRadius: '5px',
                        }}
                      />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot
                        index={3}
                        style={{
                          borderTopLeftRadius: '5px',
                          borderBottomLeftRadius: '5px',
                        }}
                      />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot
                        index={5}
                        style={{
                          borderTopRightRadius: '5px',
                          borderBottomRightRadius: '5px',
                        }}
                      />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <Button
                  type="submit"
                  className="hover:bg-slate-700 text-white bg-slate-900 rounded"
                  disabled={!form.formState.isValid}
                  onClick={form.handleSubmit(onSubmit)}
                >
                  Entrar
                </Button>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}
