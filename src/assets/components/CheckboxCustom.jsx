import { Checkbox, FormControlLabel } from "@mui/material"
import { useState } from "react"

export default function CheckboxCustom(props) {
  const [checked, setChecked] = useState(true)
  function handleChange() {
    if (checked === false) {
      const addedModes = [...props.modes, props.value]
      props.setModes(addedModes)
    }
    if (checked === true) {
      props.modes.splice(props.modes.indexOf(props.value), 1)
      props.setModes([...props.modes])
    }
    setChecked(!checked)
  }

  return (
    <FormControlLabel
      control={
        <Checkbox
          value={props.value}
          checked={checked}
          onChange={handleChange}
        />
      }
      label={props.value === "dlr" ? props.value.toUpperCase() : props.value}
    />
  )
}
