import { TextField, Autocomplete } from "@mui/material";

interface AutocompleteCustomProps {
  label: string;
  data: any;
  value: string | null;
  onChange: (value: string | null) => void;
}

export default function AutocompleteCustom(props:AutocompleteCustomProps) {
  return (
    <Autocomplete
      value={props.value}
      onChange={(_event, newValue) => {
        props.onChange(newValue);
      }}
      options={props.data}
      renderInput={(params) => <TextField {...params} label={props.label} />}
    />
  );
}
