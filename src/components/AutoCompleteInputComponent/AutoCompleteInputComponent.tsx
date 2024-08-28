import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
// import * as yup from "yup";

// Define the type for the options
interface Option {
  label: string;
}

// Define the props for the AutoCompleteInputComponent component
interface AutoCompleteInputProps {
  name: string;
  options: Option[];
  control: any; // type this more specifically if you know the form control type
  label?: string;
}

const AutoCompleteInputComponent: React.FC<AutoCompleteInputProps> = ({
  name,
  options,
  control,
  label,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: "This field is required" }}
      render={({ field, fieldState }: { field: any; fieldState: any }) => (
        <>
          <Autocomplete
            options={options}
            getOptionLabel={(option) => option.label}
            value={field.value}
            onChange={(_, newValue) => field.onChange(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                label={label || "Select Option"}
                variant="outlined"
                error={!!fieldState.error}
                helperText={fieldState.error ? fieldState.error.message : ""}
              />
            )}
            disableClearable
          />
        </>
      )}
    />
  );
};

export default AutoCompleteInputComponent;
