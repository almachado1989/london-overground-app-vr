import { FormControlLabel, Radio } from "@mui/material"
import { radioStyle } from "../../styles/styleVariables"

export default function RadioCustom(props) {
  return (
    <FormControlLabel
      value={props.value}
      control={<Radio />}
      label={props.label}
      sx={radioStyle}
    />
  )
}
