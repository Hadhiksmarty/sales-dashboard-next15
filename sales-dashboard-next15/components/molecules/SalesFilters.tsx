import Input from '@/components/atoms/Input';
import Select from '@/components/atoms/Select';

type Props = {
  year: string;
  threshold: number;
  onYearChange: (year: string) => void;
  onThresholdChange: (threshold: number) => void;
};

export default function SalesFilters({ year, threshold, onYearChange, onThresholdChange }: Props) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="space-y-2">
        <span className="text-sm font-semibold text-slate-700">Sales year</span>
        <Select value={year} onChange={(e) => onYearChange(e.target.value)} className="w-full">
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </Select>
      </label>

      <label className="space-y-2">
        <span className="text-sm font-semibold text-slate-700">Minimum sales threshold</span>
        <Input
          type="number"
          min="0"
          step="1000"
          value={threshold}
          onChange={(e) => onThresholdChange(Math.max(0, Number(e.target.value) || 0))}
        />
      </label>
    </div>
  );
}
