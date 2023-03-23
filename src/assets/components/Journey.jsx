import { Typography } from "@mui/material"

export default function Journey(props) {
  console.log(props.journey[0])
  return (
    <div className="journey">
      {props.journey[0].legs.map((leg) => {
        return (
          <Typography component={"div"}>
            <h2>{leg.instruction.detailed}</h2>
            <p>
              <strong>
                {leg.path.stopPoints.length} stops, {leg.duration} mins
              </strong>
            </p>
            <p>{leg.departurePoint.commonName}</p>
            <p>{leg.arrivalPoint.commonName}</p>
          </Typography>
        )
      })}
      <Typography component={"div"}>
        <p>£{(props.journey[0].fare.totalCost / 100).toFixed(2)}</p>
        <p>Total: {props.journey[0].duration} mins</p>
      </Typography>
    </div>
  )
}
