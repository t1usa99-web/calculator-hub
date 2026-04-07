interface Props {
  label: string;
  value: string;
  highlight?: boolean;
  subtext?: string;
}

export default function ResultCard({ label, value, highlight, subtext }: Props) {
  return (
    <div className={`rounded-lg p-4 ${highlight ? "bg-primary-50 border border-primary-200" : "bg-gray-50 border border-gray-200"}`}>
      <p className="text-sm text-gray-600 mb-1">{label}</p>
      <p className={`text-2xl font-bold ${highlight ? "text-primary-700" : "text-gray-900"}`}>{value}</p>
      {subtext && <p className="text-xs text-gray-500 mt-1">{subtext}</p>}
    </div>
  );
}
