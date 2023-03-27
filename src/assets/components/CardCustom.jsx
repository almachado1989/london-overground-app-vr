import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  useTheme,
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { ModesContext } from "../../App"

export default function CardCustom(props) {
  const navigate = useNavigate()
  const theme = useTheme()
  const modes = useContext(ModesContext)

  function handleClick() {
    const [stationTo] = props.stations.filter((station) => {
      return station.stopName === props.card.station
    })
    props.setStationTo(stationTo)
    if (props.location && modes.length > 0) {
      props.searchRoute(props.stationFrom, stationTo)
      navigate("/search")
    } else if (modes.length === 0) {
      props.setSnackbarOpen(true)
    } else {
      window.scrollTo(0, 0)
    }
  }

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        component={"img"}
        width={320}
        height={180}
        sx={{ aspectRatio: "16 / 9" }}
        image={props.card.image}
        alt={"Photo of " + props.card.header}
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
        <Button
          aria-label={"search journey to " + props.card.header}
          onClick={handleClick}
          size="small"
          sx={{
            color: theme.palette.secondary.main,
            position: "unset",
            "& span": { position: "relative" },
          }}
        >
          {props.card.buttonText}
        </Button>
      </CardActions>
    </Card>
  )
}
