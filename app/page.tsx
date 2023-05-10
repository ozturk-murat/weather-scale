"use client";
import { useRouter } from "next/navigation";

const checkApiKey = () => {
  const router = useRouter();

  if (typeof window !== "undefined") {
    const apiKey = sessionStorage.getItem("myApiKey");
    console.log("apiiikey", apiKey);

    if (!apiKey) {
      router.push("/set-api-key");
    }
  }
};

export default function Home() {
  checkApiKey();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-36 px-12">
      HELLO
    </main>
  );
}
