"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from "react";

export default function SetApiKey() {
  const router = useRouter();
  const [apiKey, setApiKey] = useState('');

  const handleSubmit = () => {
    sessionStorage.setItem('myApiKey', apiKey);
    router.push('/');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-36 px-12">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.1rem_#ffffff70]"
          src="/weather-scale.svg"
          alt="Weather Scale Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <form onSubmit={handleSubmit} className="relative container flex w-full justify-center items-center h-40">
        <input
          type="text"
          className="inset-y-0 px-4 py-2 text-center text-2xl rounded-3xl text-gray-600 rounded-r-none w-1/2 h-16 shadow-sm focus:outline-none"
          placeholder="Enter API Key"
        />
        <span className="flex hover:bg-white hover:text-gray-400 hover:transition-colors  items-center h-16 border-white rounded-3xl rounded-l-none border-2 px-3 font-bold text-grey-100">
          <button
            type="submit"
            className="hover:bg-gredient-light text-lg font-bold py-3 px-6 rounded"
          >
            Sent
          </button>
        </span>
      </form>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Map View </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Türkiye haritası üzerinden istediğin ili seçebilir ve hava durumu
            detaylarına ulaşabilirsin.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>List View</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Türkiye iller listesi üzerinden istediğin ili seçebilir ve hava
            durumu detaylarına ulaşabilirsin.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Details Page</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Seçtiğin ilin günlük hava durumu detaylarını bu sayfadan
            görüntüleyebilirsin
          </p>
        </a>
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Next 5 Days</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Hava durumu bilgileri seçilen il bazlı olarak gelecek 5 günlük
            tahminleri gösterir
          </p>
        </a>
      </div>
    </main>
  );
}
