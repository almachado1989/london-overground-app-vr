import "./App.css"
import { MODES } from "./variables/global"
import { useEffect, useState, createContext } from "react"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import { Grid } from "@mui/material"
import { addDays, padNumber } from "./functions/helpers"
import { Route, Routes } from "react-router-dom"
import Home from "./assets/pages/Home"
import Search from "./assets/pages/Search"
import Layout from "./assets/pages/Layout"
import NotFound from "./assets/pages/NotFound"
import stationsJson from "../stations.json"
export const ModesContext = createContext(null)

function App() {
  dayjs.extend(utc)
  const [stations, setStations] = useState(stationsJson)
  const [stationFrom, setStationFrom] = useState("")
  const [stationTo, setStationTo] = useState("")
  const [journey, setJourney] = useState("")
  const [journeyIndex, setJourneyIndex] = useState(0)
  const [journeyTime, setJourneyTime] = useState(dayjs.utc())
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [journeyNow, setJourneyNow] = useState(true)
  const [location, setLocation] = useState("")
  const [modes, setModes] = useState([...MODES])
  const [timeIsDeparting, settimeIsDeparting] = useState(true)

  function getNearestStationId(object) {
    if (!object) return
    return object.stopPoints[0].stationNaptan
  }

  function getStationIndex(stationId) {
    const index = stations.findIndex((station) => {
      return station.stopId === stationId
    })
    return index
  }

  function storeStations(data) {
    setStations(data.default)
    return data.default
  }

  const geolocationOptions = {
    enableHighAccuracy: true,
    maximumAge: 10000,
    timeout: 5000,
  }

  function getLocation() {
    navigator.geolocation.getCurrentPosition(
      successCallback,
      errorCallback,
      geolocationOptions
    )
  }

  function successCallback(position) {
    if (position.coords.accuracy > 500) {
      setTimeout(getLocation, 10000)
    }
    setLocation(position)
  }

  function errorCallback(error) {
    console.log(error)
  }

  useEffect(() => {
    getLocation()
  }, [])

  useEffect(() => {
    let radius = 1000
    if (location) {
      fetch(
        `https://api.tfl.gov.uk/StopPoint/?lat=${location.coords.latitude}&lon=${location.coords.longitude}&stopTypes=NaptanMetroStation,NaptanRailStation&radius=${radius}`
      )
        .then((response) => response.json())
        .then((result) => getNearestStationId(result))
        .then((stationId) => {
          const index = getStationIndex(stationId)
          if (index > -1) setStationFrom(stations[index])
        })
        .catch((error) => console.error(error))
    }
  }, [stations, location])

  useEffect(() => {
    // fetch("http://localhost:3001/api/stations")
    // .then((response) => response.json())
    // .then((result) => storeStations(result))
    // .then((stations) => {
    if (!stationFrom) setStationFrom(stations[0])
    setStationTo(stations[1])
    // })
    // .catch((error) => console.error(error))
  }, [])

  function searchRoute(from, to) {
    setError(false)
    setLoading(true)
    fetch(
      `https://api.tfl.gov.uk/journey/journeyresults/${from.stopId}/to/${to.stopId}?mode=${modes}`
    )
      .then((response) => response.json())
      .then((result) => {
        setLoading(false)
        setJourney(result.journeys.slice(0, 3))
        setJourneyIndex(0)
      })
      .catch((error) => {
        console.error(error)
        setError(true)
      })
  }

  function searchLater(datetime, newJourney) {
    const dateParams = getDateParams(datetime)
    let timeIs = "Departing"
    if (newJourney) {
      timeIs = timeIsDeparting ? "Departing" : "Arriving"
    }
    setLoading(true)
    fetch(
      `https://api.tfl.gov.uk/journey/journeyresults/${stationFrom.stopId}/to/${stationTo.stopId}?mode=${modes}&time=${dateParams.time}&timeIs=${timeIs}&date=${dateParams.date}`
    )
      .then((response) => response.json())
      .then((result) => {
        setLoading(false)
        if (
          journey &&
          !newJourney &&
          stationFrom.stopId === journey[0].legs[0].departurePoint.naptanId &&
          stationTo.stopId ===
            journey[0].legs[journey[0].legs.length - 1].arrivalPoint.naptanId
        ) {
          setJourney([...journey, ...result.journeys.slice(0, 3)])
          setJourneyIndex((prevState) => prevState + 1)
        } else {
          setJourney(result.journeys.slice(0, 3))
          setJourneyIndex(0)
        }
      })
  }

  return (
    <div className="App">
      <ModesContext.Provider value={modes}>
        <Grid container>
          <Routes>
            <Route
              path="/"
              element={
                <Layout
                  loading={loading}
                  stations={stations}
                  stationTo={stationTo}
                  stationFrom={stationFrom}
                  setStationTo={setStationTo}
                  setStationFrom={setStationFrom}
                  searchRoute={searchRoute}
                  searchLater={searchLater}
                  journeyTime={journeyTime}
                  setJourneyTime={setJourneyTime}
                  journeyNow={journeyNow}
                  setJourneyNow={setJourneyNow}
                  setModes={setModes}
                  timeIsDeparting={timeIsDeparting}
                  settimeIsDeparting={settimeIsDeparting}
                />
              }
            >
              <Route
                index
                element={
                  <Home
                    stations={stations}
                    location={location}
                    stationTo={stationTo}
                    stationFrom={stationFrom}
                    setStationTo={setStationTo}
                    searchRoute={searchRoute}
                  />
                }
              />

              <Route
                path="/search"
                element={
                  <Search
                    loading={loading}
                    journey={journey}
                    setJourneyIndex={setJourneyIndex}
                    searchLater={searchLater}
                    error={error}
                    journeyIndex={journeyIndex}
                  />
                }
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Grid>
      </ModesContext.Provider>
    </div>
  )
}
export default App

function getDateParams(datetime) {
  let time = padNumber(parseInt(datetime.slice(11, 16).replace(":", "")) + 1)

  let date = datetime.slice(0, 10).replace(/-/g, ",")

  if (time === "2400") {
    date = addDays(date, 1)
    date = date.replace(/,/g, "")
  } else date = date.replace(/,/g, "")

  time === "2400" ? (time = "0000") : (time = time)
  return { time: time, date: date }
}
