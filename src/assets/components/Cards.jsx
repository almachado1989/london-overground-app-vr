import { Grid, Typography } from "@mui/material"
import CardCustom from "./CardCustom"

export default function Cards(props) {
  const cardContent = [
    {
      header: "Oxford Street",
      bodyText:
        "One of London's most popular shopping destinations, home to a wide variety of shops and a vibrant atmosphere.",
      buttonText: "Let's go shopping!",
      image:
        "https://www.ingka.com/wp-content/uploads/resized/f5/Oxford-Circus-cropped_1200x630_6549094aa7be6f747d89307db9e56a54.jpeg",
      station: "oxford circus",
    },
    {
      header: "Tate Modern",
      bodyText:
        " A modern art museum featuring a vast collection of contemporary and modern art from around the world.",
      buttonText: "Let's get arty!",
      image:
        "https://cdn.britannica.com/39/136939-050-4EFA1B8D/Tate-Modern-London.jpg",
      station: "st. paul's",
    },
    {
      header: "The London Eye",
      bodyText:
        "An iconic observation wheel offering stunning panoramic views of the city from 135 meters above ground.",
      buttonText: "Let's see the city!",
      image:
        "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_3000,h_2000,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ikknf4oeysojhyv2z0jk/LondonEyeTickets-FastTrackTicketsAvailable-KlookUnitedKingdom.jpg",
      station: "waterloo",
    },
    {
      header: "The British Museum",
      bodyText:
        "A world-famous museum with an impressive collection of artifacts from around the world, spanning over two million years of history.",
      buttonText: "Let's see some history!",
      image:
        "https://www.britishmuseum.org/sites/default/files/styles/uncropped_large/public/event_default.png?itok=d1iPPzdW",
      station: "tottenham court road",
    },
    {
      header: "The West End",
      bodyText:
        "London's entertainment district, home to popular theaters, restaurants, and nightclubs.",
      buttonText: "Let's party!",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-528153683-1663764747.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*",
      station: "leicester square",
    },
    {
      header: "Camden Market",
      bodyText:
        "A popular shopping destination located in the vibrant Camden neighborhood, with an eclectic mix of shops, stalls, and food vendors.",
      buttonText: "Let's go to Caaamden!",
      image: "https://media.timeout.com/images/105857286/image.jpg",
      station: "camden town",
    },
  ]
  return (
    <Grid container>
      <Grid item xs={12} sx={{ padding: "1rem" }}>
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
                modes={props.modes}
              />
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}
