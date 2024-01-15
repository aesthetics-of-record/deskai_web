import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import axios from 'axios';

const Page = () => {
  return (
    <main className="p-6 w-full">
      <header className="">
        <div className="font-black text-2xl">Welcome !</div>
        <div className="h-4" />
        <Separator className="bg-slate-300 dark:bg-slate-700" />
      </header>
      <article>
        <Card>
          <CardHeader>
            <CardTitle>🎉 가입하신 것을 환영합니다!!</CardTitle>
          </CardHeader>
          <CardContent>🌹데스크탑 앱에서 로그인을 해 주세요.🌹</CardContent>
        </Card>
      </article>
    </main>
  );
};

export default Page;
