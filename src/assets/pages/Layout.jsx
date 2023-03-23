import { Box, Grid } from "@mui/material"
import { Outlet } from "react-router-dom"
import StationSelector from "../components/StationSelector"
import { boxStyle } from "../../styles/styleVariables"
import Nav from "../components/Nav"
import { Suspense, useMemo } from "react"
import { lazy } from "react"

export default function Layout(props) {
  const LineStatus = useMemo(
    () => lazy(() => import("../components/LineStatus")),
    ["../components/LineStatus"]
  )

  return (
    <>
      <Grid className="sidebar" item xs="auto">
        <Box sx={boxStyle}>
          {props.stations && props.stationFrom && props.stationTo && (
            <StationSelector
              stations={props.stations}
              stationTo={props.stationTo}
              stationFrom={props.stationFrom}
              setStationTo={props.setStationTo}
              setStationFrom={props.setStationFrom}
              searchRoute={props.searchRoute}
              searchLater={props.searchLater}
              journeyTime={props.journeyTime}
              setJourneyTime={props.setJourneyTime}
              journeyNow={props.journeyNow}
              setJourneyNow={props.setJourneyNow}
              modes={props.modes}
              setModes={props.setModes}
              timeIsDeparting={props.timeIsDeparting}
              settimeIsDeparting={props.settimeIsDeparting}
            />
          )}
          <Suspense>
            <LineStatus journeyNow={props.journeyNow} />
          </Suspense>
        </Box>
      </Grid>
      <Grid item xs>
        <Nav />
        <Outlet />
      </Grid>
    </>
  )
}
