
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold text-primary">LifeLink</h1>
      <p className="mt-4 text-lg max-w-2xl text-gray-600">
        Real-time organ donation & recipient matching with explainable AI and smart logistics.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/dashboard" className="bg-primary text-white px-6 py-3 rounded-xl">
          Hospital Dashboard
        </Link>
        <Link href="/transport" className="border border-primary text-primary px-6 py-3 rounded-xl">
          Transport Map
        </Link>
      </div>
    </main>
  );
}
