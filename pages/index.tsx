import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import style from '@/styles/pages/index.module.css'
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
    router.push('/urlsetting');
  }, 3000);

  return () => clearTimeout(timer);
  });

  return (
    <main className={style.mainContainer}>
      <div className={style.logo}>
        <Image src="assets/images/icons/companyLogo.svg" alt="logo" width={200} height={200} priority />
      </div>
    </main>
  )
}
