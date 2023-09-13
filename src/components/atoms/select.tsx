import * as select from "./primitives/select";

type Option = {
  value: string;
  label: string;
};

interface SelectProps {
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  options: Option[];
}

export function Select({ defaultValue, disabled, options, placeholder }: SelectProps) {
  return (
    <select.Select disabled={disabled} defaultValue={defaultValue}>
      <select.SelectTrigger>
        <select.SelectValue placeholder={placeholder}/>
      </select.SelectTrigger>
      <select.SelectContent>
        {options.map((option, index) => (
          <select.SelectItem key={index} value={option.value}>
            {option.label}
          </select.SelectItem>
        ))}
      </select.SelectContent>
    </select.Select>
  );
}
