export const datePickerStyle = {
  width: 300,
  "& .MuiInputBase-formControl": {
    color: "white",
  },
  "& .MuiFormLabel-root, .MuiButtonBase-root": {
    color: "rgba(255, 255, 255, 0.8)",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.8)",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
}

export const radioStyle = {
  color: "white",
  "& .MuiButtonBase-root": {
    color: "rgba(255, 255, 255, 0.8)",
  },
  "& .MuiRadio-root.Mui-checked": { color: "white" },
}

export const searchButtonStyle = {
  color: "rgba(255, 255, 255, 0.8)",
  borderColor: "rgba(255, 255, 255, 0.8)",
  "&:hover": {
    color: "white",
    borderColor: "white",
  },
}

export const checkboxStyle = {
  textTransform: "capitalize",
  color: "white",
  "& .MuiCheckbox-root": { color: "rgba(255, 255, 255, 0.8)" },
  "& .MuiCheckbox-root.Mui-checked": { color: "rgba(255, 255, 255, 0.8)" },
}

export const boxStyle = {
  minHeight: "100dvh",
  backgroundColor: "primary.dark",
  position: "sticky",
  top: 0,
  display: "grid",
  alignContent: "space-between",
}
