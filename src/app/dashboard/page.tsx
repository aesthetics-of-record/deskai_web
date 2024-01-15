import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import axios from "axios";

const Page = () => {
  return (
    <main className="p-6 w-full">
      <header className="">
        <div className="font-black text-2xl">Dashboard</div>
        <div className="h-4" />
        <Separator className="bg-slate-300 dark:bg-slate-700" />
      </header>
      <article>
        <Card></Card>
      </article>
    </main>
  );
};

export default Page;
