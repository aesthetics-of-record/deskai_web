'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import ButtonPrimary from '../custom/button-gradient';
import { supabase } from '@/lib/supabase/db';
import { useEffect, useState } from 'react';

const SigninWithOauth = () => {
  const router = useRouter();
  const [data, setData] = useState<any>();
  useEffect(() => {
    const getData = async () => {
      const data = await supabase.auth.getUser();
      console.log(data);

      setData(data);
    };
    getData();
  }, []);

  return (
    <div className="p-10">
      <div>
        <Button
          type="button"
          onClick={() => {
            supabase.auth.signInWithOAuth({
              provider: 'github',
            });
          }}
        >
          깃헙 로그인
        </Button>
      </div>
    </div>
  );
};

export default SigninWithOauth;
