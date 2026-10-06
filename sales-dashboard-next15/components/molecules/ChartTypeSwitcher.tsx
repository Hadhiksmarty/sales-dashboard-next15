import Button from '@/components/atoms/Button';
import type { ChartType } from '@/types/sales';

type Props = {
  value: ChartType;
  onChange: (type: ChartType) => void;
};

export default function ChartTypeSwitcher({ value, onChange }: Props) {
  const types: ChartType[] = ['bar', 'line', 'pie'];

  return (
    <div className="flex flex-wrap gap-2">
      {types.map((type) => (
        <Button key={type} active={value === type} onClick={() => onChange(type)}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </Button>
      ))}
    </div>
  );
}
