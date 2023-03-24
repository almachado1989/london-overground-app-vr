import { Box, Grid, useMediaQuery, useTheme } from "@mui/material"
import { Outlet } from "react-router-dom"
import StationSelector from "../components/StationSelector"
import { boxStyle } from "../../styles/styleVariables"
import Nav from "../components/Nav"
import { Suspense, useEffect, useMemo, useRef } from "react"
import { lazy } from "react"
import { useLocation } from "react-router-dom"

export default function Layout(props) {
  const LineStatus = useMemo(
    () => lazy(() => import("../components/LineStatus")),
    ["../components/LineStatus"]
  )
  const gridRef = useRef()
  const theme = useTheme()
  const route = useLocation()
  const query = useMediaQuery(theme.breakpoints.down("sm"))
  function style() {
    if (query) return { marginTop: "56px" }
  }

  useEffect(() => {
    console.log(route)
    gridRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [props.loading])

  return (
    <>
      <Grid className="sidebar" item xs={12} sm="auto" sx={style}>
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
      <Grid
        ref={gridRef}
        sx={{ scrollMarginTop: "56px", minHeight: "calc(100vh - 56px)" }}
        item
        xs
      >
        <Nav navPosition={query ? "fixed" : "sticky"} />
        <Outlet />
      </Grid>
    </>
  )
}
