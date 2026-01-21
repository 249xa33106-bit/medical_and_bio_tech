
export default function MatchScore() {
  const factors = [
    { label: "Blood Compatibility", value: 30 },
    { label: "Tissue Match", value: 25 },
    { label: "Urgency", value: 25 },
    { label: "Transport Feasibility", value: 20 }
  ];
  const total = factors.reduce((a,b)=>a+b.value,0);

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="font-bold mb-4">Compatibility Score</h3>
      <div className="text-4xl font-bold text-primary mb-4">{total}/100</div>
      {factors.map(f=>(
        <div key={f.label} className="mb-2">
          <div className="flex justify-between text-sm">
            <span>{f.label}</span><span>{f.value}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded">
            <div className="h-2 bg-primary rounded" style={{width:`${f.value}%`}} />
          </div>
        </div>
      ))}
    </div>
  );
}
