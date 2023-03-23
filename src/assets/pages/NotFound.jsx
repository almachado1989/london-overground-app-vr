import Nav from "../components/Nav"
import { Box } from "@mui/material"

export default function NotFound() {
  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <Nav />
      <img
        className="not-found-image"
        src="https://www.nationalworld.com/webimg/b25lY21zOjgwNDgyN2RkLWFiODQtNGU2YS05NTZiLTg2ZWY1NzA1YmE3YzoxNzdmZGZkNi0yY2NkLTQ5MmItOTc4Zi0zYjY5NmNjOWQyOWI=.jpg?width=640&quality=65"
        alt=""
      />
    </Box>
  )
}
