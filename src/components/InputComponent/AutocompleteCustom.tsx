import { TextField, Autocomplete } from "@mui/material";

interface AutocompleteCustomProps {
  label: string;
  data: any;
  value: string | null;
  onChange: (value: string | null) => void;
}

export default function AutocompleteCustom({
  label,
  data,
  value,
  onChange,
}: AutocompleteCustomProps) {
  return (
    <Autocomplete
      value={value}
      onChange={(_event, newValue) => {
        onChange(newValue);
      }}
      options={data}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}
