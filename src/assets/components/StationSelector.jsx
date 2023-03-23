import { Button, FormGroup } from "@mui/material"
import Dropdown from "./Dropdown"
import RadioGroupCustom from "./RadioGroupCustom"
import DateTimePickerCustom from "./DateTimePickerCustom"
import { checkboxStyle, searchButtonStyle } from "../../styles/styleVariables"
import { useNavigate } from "react-router-dom"
import CheckboxCustom from "./CheckboxCustom"
import { MODES } from "../../variables/global"

export default function StationSelector(props) {
  const noStation = { stopName: "", stopId: "" }
  const navigate = useNavigate()

  function scumCheck(newValue) {
    if (newValue.stopName === "arsenal") {
      props.setStationFrom({
        stopName: "woolwich arsenal",
        stopId: "940GZZDLWLA",
      })
      return true
    }
  }

  return (
    <div className="form-wrapper">
      <Dropdown
        handleChange={(event, newValue) => {
          if (newValue) {
            if (scumCheck(newValue)) return
            props.setStationFrom(newValue)
            return
          }
          props.setStationFrom(noStation)
        }}
        stations={props.stations}
        value={props.stationFrom}
        label="From"
      />

      <Dropdown
        handleChange={(event, newValue) => {
          if (newValue) {
            props.setStationTo(newValue)
            return
          }
          props.setStationTo(noStation)
        }}
        stations={props.stations}
        value={props.stationTo}
        label="To"
      />

      {props.stationFrom.stopName === "" ||
      props.stationTo.stopName === "" ||
      props.modes.length < 1 ? (
        <Button disabled variant="outlined">
          Search
        </Button>
      ) : (
        <Button
          onClick={
            props.journeyNow
              ? () => {
                  props.searchRoute(props.stationFrom, props.stationTo)
                  navigate("/search")
                }
              : () => {
                  props.searchLater(props.journeyTime.format(), true)
                  navigate("/search")
                }
          }
          sx={searchButtonStyle}
          variant="outlined"
        >
          Search
        </Button>
      )}
      <FormGroup row sx={checkboxStyle}>
        {MODES.map((mode, idx) => {
          return (
            <CheckboxCustom
              key={mode}
              modes={props.modes}
              setModes={props.setModes}
              value={mode}
            />
          )
        })}
      </FormGroup>
      <RadioGroupCustom
        state={props.journeyNow}
        setState={props.setJourneyNow}
        label={["Now", "Later"]}
      />
      {!props.journeyNow && (
        <>
          <DateTimePickerCustom
            journeyTime={props.journeyTime}
            setJourneyTime={props.setJourneyTime}
          />
          <RadioGroupCustom
            state={props.timeIsDeparting}
            setState={props.settimeIsDeparting}
            label={["Leave at", "Arrive by"]}
          />
        </>
      )}
    </div>
  )
}
