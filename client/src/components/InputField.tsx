import { cn } from "@/lib/utils";

interface Props {
  label: string;
  value: number | string;
  onChange: (value: number) => void;
  prefix?: string;
  suffix?: string;
  min?: number;
  max?: number;
  step?: number;
  hint?: string;
  id?: string;
}

export default function InputField({ label, value, onChange, prefix, suffix, min, max, step = 1, hint, id }: Props) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative flex items-center">
        {prefix && (
          <span className="absolute left-3 text-gray-500 text-sm pointer-events-none">{prefix}</span>
        )}
        <input
          id={id}
          type="number"
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          min={min}
          max={max}
          step={step}
          className={cn(
            "w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900",
            "focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none transition-all",
            prefix && "pl-7",
            suffix && "pr-12"
          )}
        />
        {suffix && (
          <span className="absolute right-3 text-gray-500 text-sm pointer-events-none">{suffix}</span>
        )}
      </div>
      {hint && <p className="mt-1 text-xs text-gray-500">{hint}</p>}
    </div>
  );
}
