import { Grid, Typography, Snackbar, Alert, useTheme } from "@mui/material"
import CardCustom from "./CardCustom"
import { useState } from "react"

export default function Cards(props) {
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const theme = useTheme()

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return
    }
    setSnackbarOpen(false)
  }
  const cardContent = [
    {
      header: "Oxford Street",
      bodyText:
        "One of London's most popular shopping destinations, home to a wide variety of shops and a vibrant atmosphere.",
      buttonText: "Let's go shopping!",
      image: "./images/Oxford-Circus.webp",
      station: "oxford circus",
    },
    {
      header: "Tate Modern",
      bodyText:
        " A modern art museum featuring a vast collection of contemporary and modern art from around the world.",
      buttonText: "Let's get arty!",
      image: "./images/Tate-Modern-London.webp",
      station: "st. paul's",
    },
    {
      header: "The London Eye",
      bodyText:
        "An iconic observation wheel offering stunning panoramic views of the city from 135 meters above ground.",
      buttonText: "Let's see the city!",
      image: "./images/LondonEye.webp",
      station: "waterloo",
    },
    {
      header: "The British Museum",
      bodyText:
        "A world-famous museum with an impressive collection of artifacts from around the world, spanning over two million years of history.",
      buttonText: "Let's see some history!",
      image: "./images/british-museum.webp",
      station: "tottenham court road",
    },
    {
      header: "The West End",
      bodyText:
        "London's entertainment district, home to popular theaters, restaurants, and nightclubs.",
      buttonText: "Let's party!",
      image: "./images/west-end.webp",
      station: "leicester square",
    },
    {
      header: "Camden Market",
      bodyText:
        "A popular shopping destination located in the vibrant Camden neighborhood, with an eclectic mix of shops, stalls, and food vendors.",
      buttonText: "Let's go to Caaamden!",
      image: "./images/camden-market.webp",
      station: "camden town",
    },
  ]
  return (
    <Grid
      container
      sx={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,1) 15%, rgba(238,238,238,1) 100%)",
        padding: "0 1rem 1rem 1rem",
      }}
    >
      <Grid item xs={12} sx={{ padding: "2rem 1rem 1rem 1rem" }}>
        <Typography component={"div"}>
          <h2>Not sure where to go? Try one of these great destinations!</h2>
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        spacing={2}
        sx={{
          margin: "0",
          paddingBottom: "1rem",
          paddingRight: "1rem",
        }}
      >
        {cardContent.map((card) => {
          return (
            <Grid key={card.header} item xs={12} md={6} lg={4}>
              <CardCustom
                card={card}
                setStationTo={props.setStationTo}
                stationTo={props.stationTo}
                stationFrom={props.stationFrom}
                stations={props.stations}
                location={props.location}
                searchRoute={props.searchRoute}
                setSnackbarOpen={setSnackbarOpen}
              />
            </Grid>
          )
        })}
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          variant="filled"
          onClose={handleClose}
          severity="info"
          sx={{ width: "100%", backgroundColor: theme.palette.secondary.dark }}
        >
          Please select a mode
        </Alert>
      </Snackbar>
    </Grid>
  )
}
