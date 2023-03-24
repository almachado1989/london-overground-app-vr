import { Typography } from "@mui/material"
import StopList from "./StopList"
import { trimStationName } from "../../functions/helpers"
import JourneyDetailsBar from "./JourneyDetailsBar"
import JourneyNextPrev from "./JourneyNextPrev"

export default function JourneyGraphic(props) {
  return (
    <div className="journey-graphic">
      <JourneyDetailsBar journey={props.journey} />
      <JourneyNextPrev
        setJourneyIndex={props.setJourneyIndex}
        journey={props.journeys}
        journeyIndex={props.journeyIndex}
        searchLater={props.searchLater}
      />
      {props.journey.legs.map((leg, idx) => {
        const journeyDetails = leg.instruction.detailed
        const index = journeyDetails.indexOf(
          " ",
          journeyDetails.indexOf(" ") + 1
        )
        const journeyLine = journeyDetails.substr(0, index)
        const journeyDirection = journeyDetails.substr(index + 1)
        return (
          <div className="graphic-inner" key={idx}>
            <Typography className="journey-leg" component={"div"}>
              <div className="journey-header">
                <h3>{journeyLine}</h3>
                <h4>{journeyDirection}</h4>
              </div>
              <span className="circle"></span>
              <div className="journey-details">
                <p>{leg.departureTime.slice(11, 16)}</p>
                <strong>
                  <p>Start: {trimStationName(leg.departurePoint.commonName)}</p>
                  <p>End: {trimStationName(leg.arrivalPoint.commonName)}</p>
                </strong>
                <span>
                  {leg.path.stopPoints.length > 0 && (
                    <>
                      {leg.mode.name !== "walking" && (
                        <>
                          {leg.path.stopPoints.length}{" "}
                          {leg.path.stopPoints.length > 1 ? "stops" : "stop"},{" "}
                        </>
                      )}
                    </>
                  )}
                  {leg.duration} {leg.duration > 1 ? "mins" : "min"}
                </span>
              </div>
            </Typography>
            <div className={leg.routeOptions[0].name + " line"}>
              {leg.path.stopPoints.length > 1 && (
                <StopList
                  stopPoints={leg.path.stopPoints}
                  journeyIndex={props.journeyIndex}
                />
              )}
            </div>
            {idx === props.journey.legs.length - 1 && (
              <Typography className="journey-leg" component={"div"}>
                <div className="journey-header">
                  <h3>{leg.arrivalPoint.commonName}</h3>
                </div>
                <span className="circle"></span>
                <div className="journey-details">
                  <p>{leg.arrivalTime.slice(11, 16)}</p>
                  <strong>End of journey</strong>
                </div>
              </Typography>
            )}
          </div>
        )
      })}
    </div>
  )
}
