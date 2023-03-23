import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
export default function Dropdown(props) {
  const style = {
    width: 300,
    "&.Mui-focused .MuiInputLabel-outlined": {
      color: "white",
    },
    "& .MuiAutocomplete-inputRoot": {
      color: "white",

      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(255, 255, 255, 0.8)",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "white",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "white",
      },
    },
    "& .MuiFormLabel-root, .MuiButtonBase-root": {
      color: "rgba(255, 255, 255, 0.8)",
    },
  }
  return (
    <div>
      <Autocomplete
        disablePortal
        id="stationFrom"
        options={props.stations}
        getOptionLabel={(option) => option.stopName}
        value={props.value}
        sx={style}
        onChange={props.handleChange}
        renderInput={(params) => <TextField {...params} label={props.label} />}
      />
    </div>
  )
}
