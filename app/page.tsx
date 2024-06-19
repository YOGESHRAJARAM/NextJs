import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Yogesh</h2>
      <Link href="/dashboard">dashboard</Link>
      <Link href="/dashboard/setting">Setting</Link>
    </main>
  );
}
