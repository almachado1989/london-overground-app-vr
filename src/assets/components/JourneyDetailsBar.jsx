import { useTheme } from "@emotion/react"
import { Box, Typography } from "@mui/material"

export default function JourneyDetailsBar(props) {
  const theme = useTheme()
  const style = {
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    minHeight: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingInline: "1rem",
  }
  return (
    <Typography component={"div"}>
      <Box sx={style}>
        <div>
          <p>
            Departs:{" "}
            {Intl.DateTimeFormat("en-GB", {
              dateStyle: "short",
              timeStyle: "short",
            }).format(new Date(props.journey.startDateTime))}
          </p>
          <p>
            Arrives:{" "}
            {Intl.DateTimeFormat("en-GB", {
              dateStyle: "short",
              timeStyle: "short",
            }).format(new Date(props.journey.arrivalDateTime))}
          </p>
        </div>

        <div>
          {props.journey.fare && (
            <p>Fare: £{(props.journey.fare.totalCost / 100).toFixed(2)}</p>
          )}
          <p>Duration: {props.journey.duration} mins</p>
        </div>
      </Box>
    </Typography>
  )
}
