import { SigninFormSchema } from '@/lib/types';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import * as z from 'zod';
import { Button } from '../ui/button';
import ButtonPrimary from '../custom/button-gradient';

const Signin = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof SigninFormSchema>>({
    mode: 'onChange',
    resolver: zodResolver(SigninFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const isLoading = form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form className="p-10">
        <div
          className="
          w-full
          flex
          justify-center
          items-center"
        >
          {/* <Image
            src={Logo}
            alt="cypress Logo"
            width={50}
            height={50}
          /> */}
          <span
            className="font-semibold
          text-4xl"
          >
            Desk-AI
          </span>
        </div>
        <FormDescription className="text-foreground/60 text-center">
          컴퓨터 사용을 도와주는 우리의 비서
        </FormDescription>
        <div className="h-4" />
        <FormField
          disabled={isLoading}
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  placeholder="이메일"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>

        <div className="h-4" />

        <FormField
          disabled={isLoading}
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="password"
                  placeholder="비밀번호"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <div className="h-4" />

        <ButtonPrimary
          type="submit"
          className="w-full"
          disabled={isLoading}
        >
          {!isLoading ? '로그인' : null}
        </ButtonPrimary>
        <div className="h-4" />

        <span className="flex text-sm">
          <span className="mr-2">처음 방문하셨나요 ?</span>
          <span className="text-primary hover:underline underline-offset-4">
            회원가입 하러가기
          </span>
        </span>
      </form>
    </Form>
  );
};

export default Signin;
