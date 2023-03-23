import { RadioGroup } from "@mui/material"
import RadioCustom from "./RadioCustom"

export default function RadioGroupCustom(props) {
  return (
    <RadioGroup
      row
      defaultValue={true}
      name="datetime-selector"
      value={props.state}
      onChange={() => props.setState((prevState) => !prevState)}
    >
      <RadioCustom value={true} label={props.label[0]} />
      <RadioCustom value={false} label={props.label[1]} />
    </RadioGroup>
  )
}
