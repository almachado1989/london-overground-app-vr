import { Checkbox, FormControlLabel } from "@mui/material"
import { useState, useContext } from "react"
import { ModesContext } from "../../App"

export default function CheckboxCustom(props) {
  const modes = useContext(ModesContext)
  const [checked, setChecked] = useState(true)
  function handleChange() {
    if (checked === false) {
      const addedModes = [...modes, props.value]
      props.setModes(addedModes)
    }
    if (checked === true) {
      modes.splice(modes.indexOf(props.value), 1)
      props.setModes([...modes])
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
