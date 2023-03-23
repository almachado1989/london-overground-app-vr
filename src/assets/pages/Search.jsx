import { Grid, LinearProgress, Typography } from "@mui/material"
import JourneyGraphic from "../components/JourneyGraphic"

export default function Search(props) {
  return (
    <Grid item xs>
      {props.loading && <LinearProgress />}
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
        <Typography>Something went wrong, please try again</Typography>
      )}
    </Grid>
  )
}
