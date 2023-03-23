import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import "dayjs/locale/en-gb"
import { datePickerStyle } from "../../styles/styleVariables"

export default function DateTimePickerCustom(props) {
  dayjs.extend(utc)

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      dateLibInstance={dayjs.utc}
      adapterLocale="en-gb"
    >
      <DateTimePicker
        className="date-picker"
        color={"custom"}
        minDate={dayjs.utc()}
        label="Select"
        value={props.journeyTime}
        onChange={(newValue) => props.setJourneyTime(newValue)}
        sx={datePickerStyle}
      />
    </LocalizationProvider>
  )
}
