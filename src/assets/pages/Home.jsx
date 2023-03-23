import { Grid } from "@mui/material"
import { lazy, Suspense, useMemo } from "react"

export default function Home(props) {
  const Cards = useMemo(
    () => lazy(() => import("../components/Cards")),
    ["../components/Cards"]
  )

  return (
    <Grid item xs>
      <Suspense>
        <Cards
          setStationTo={props.setStationTo}
          stations={props.stations}
          location={props.location}
          searchRoute={props.searchRoute}
          stationTo={props.stationTo}
          stationFrom={props.stationFrom}
          modes={props.modes}
        />
      </Suspense>
    </Grid>
  )
}
