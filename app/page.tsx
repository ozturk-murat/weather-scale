"use client"
import { useRouter } from 'next/navigation';

export default function Home() {
  console.log(sessionStorage);


  if(!sessionStorage.myApiKey){
    const router = useRouter();
    router.push("/set-api-key");
  }
  

  return <main className="flex min-h-screen flex-col items-center justify-between py-36 px-12">HELLO</main>;
}
