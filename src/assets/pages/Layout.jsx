import { Box, Grid, useMediaQuery, useTheme } from "@mui/material"
import { Outlet, useLocation } from "react-router-dom"
import StationSelector from "../components/StationSelector"
import { boxStyle } from "../../styles/styleVariables"
import Nav from "../components/Nav"
import { Suspense, useEffect, useMemo, useRef } from "react"
import { lazy } from "react"

export default function Layout(props) {
  const LineStatus = useMemo(
    () => lazy(() => import("../components/LineStatus")),
    ["../components/LineStatus"]
  )
  const gridRef = useRef()
  const theme = useTheme()
  const query = useMediaQuery(theme.breakpoints.down("sm"))
  const { pathname } = useLocation()
  function style() {
    if (query) return { marginTop: "56px" }
  }

  useEffect(() => {
    gridRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [props.loading])

  useEffect(() => {
    if (pathname === "/") window.scrollTo(0, 0)
  }, [pathname])

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
      <Grid ref={gridRef} sx={{ minHeight: "100dvh" }} item xs>
        <Nav navPosition={query ? "fixed" : "sticky"} />
        <Outlet />
      </Grid>
    </>
  )
}
