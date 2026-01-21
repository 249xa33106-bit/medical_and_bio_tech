
import MatchScore from "../components/MatchScore";

export default function Dashboard() {
  return (
    <main className="p-8 grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">Live Waitlist</h2>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Patient A</span>
            <span className="text-danger font-semibold">Critical</span>
          </li>
          <li className="flex justify-between">
            <span>Patient B</span>
            <span className="text-warning font-semibold">High</span>
          </li>
          <li className="flex justify-between">
            <span>Patient C</span>
            <span className="text-safe font-semibold">Medium</span>
          </li>
        </ul>
      </div>
      <MatchScore />
    </main>
  );
}
