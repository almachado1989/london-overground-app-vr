import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material"
import { useNavigate } from "react-router-dom"

export default function CardCustom(props) {
  const navigate = useNavigate()

  function handleClick() {
    const stationTo = props.stations.filter((station) => {
      return station.stopName === props.card.station
    })
    if (props.location && props.modes.length > 0) {
      props.setStationTo(stationTo[0])
      props.searchRoute(props.stationFrom, stationTo[0])
      navigate("/search")
    } else {
      props.setStationTo(stationTo[0])
    }
  }

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        component={"img"}
        sx={{ aspectRatio: "16 / 9" }}
        image={props.card.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {props.card.header}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.card.bodyText}
        </Typography>
      </CardContent>
      <CardActions sx={{ marginTop: "auto" }}>
        <Button onClick={handleClick} size="small">
          {props.card.buttonText}
        </Button>
      </CardActions>
    </Card>
  )
}
