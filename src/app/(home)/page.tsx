import { ModeToggle } from '@/components/ModeToggle';
import ButtonPrimary from '@/components/custom/button-gradient';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      안녕
      <ButtonPrimary>로그인</ButtonPrimary>
      {/* <button className="rounded py-1 px-4 bg-blue-600 hover:bg-blue-600/80">
        로그인
      </button> */}
      <ModeToggle />
    </div>
  );
}
