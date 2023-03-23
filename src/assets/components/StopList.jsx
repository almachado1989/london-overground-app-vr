import { useEffect, useState } from "react"
import { Typography, Button } from "@mui/material"
import { trimStationName } from "../../functions/helpers"
import Collapse from "@mui/material/Collapse"

export default function StopList(props) {
  const [showStops, setShowStops] = useState(false)
  useEffect(() => {
    setShowStops(false)
  }, [props.journeyIndex])
  return (
    <>
      <Button
        style={{ padding: 0 }}
        onClick={() => setShowStops((prevState) => !prevState)}
        variant="text"
      >
        {showStops ? "Hide stops" : "Show stops"}
      </Button>

      <Collapse in={showStops}>
        <Typography component={"ul"}>
          {props.stopPoints.map((stop, idx) => {
            if (idx > props.stopPoints.length - 2) return
            return <li key={idx}>{trimStationName(stop.name)}</li>
          })}
        </Typography>
      </Collapse>
    </>
  )
}
