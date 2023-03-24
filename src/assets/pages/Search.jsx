import { Grid, LinearProgress, Typography } from "@mui/material"
import JourneyGraphic from "../components/JourneyGraphic"

export default function Search(props) {
  return (
    <Grid item xs>
      {props.loading && (
        <>
          <LinearProgress />
          <Typography sx={{ color: "white" }}>Loading</Typography>
        </>
      )}
      {props.journey && !props.loading && !props.error && (
        <>
          <JourneyGraphic
            journeys={props.journey}
            journey={props.journey[props.journeyIndex]}
            journeyIndex={props.journeyIndex}
            searchLater={props.searchLater}
            setJourneyIndex={props.setJourneyIndex}
          />
        </>
      )}
      {props.error && (
        <Typography
          sx={{ padding: "4rem", fontSize: "20px", fontWeight: "bold" }}
        >
          Unfortunately we have not been able to find a route for your selected
          journey and modes.
          <br />
          <br />
          It could be that your desired mode is unavailable.
          <br />
          <br /> Please try searching with different modes.
        </Typography>
      )}
    </Grid>
  )
}
