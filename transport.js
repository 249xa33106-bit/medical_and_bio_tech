
import { useEffect, useState } from "react";

export default function Transport() {
  const [time, setTime] = useState(18000);

  useEffect(() => {
    const t = setInterval(() => setTime(v => Math.max(v - 1, 0)), 1000);
    return () => clearInterval(t);
  }, []);

  const h = Math.floor(time / 3600);
  const m = Math.floor((time % 3600) / 60);
  const s = time % 60;

  return (
    <main className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Geo-Optimized Transport</h1>
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <p>🚑 Road: 4h 20m</p>
        <p>🚁 Air: 1h 45m (Recommended)</p>
        <div className="p-4 rounded-xl text-white bg-safe">
          Organ Expiry Countdown: {h}:{m}:{s}
        </div>
        <strong>✅ Organ will arrive safely</strong>
      </div>
    </main>
  );
}
