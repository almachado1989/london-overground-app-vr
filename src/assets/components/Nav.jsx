import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { IconButton } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useTheme } from "@emotion/react"

export default function Nav() {
  const theme = useTheme()
  const navigate = useNavigate()
  return (
    <AppBar
      position="sticky"
      sx={{
        top: "0px",
        boxShadow: "none",
        backgroundColor: theme.palette.primary.light,
      }}
    >
      <Toolbar>
        <IconButton onClick={() => navigate("/")} sx={{ mr: 2 }}>
          <img src="./Underground_(no_text).svg" width={48} />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Route Planner
        </Typography>
        <Button onClick={() => navigate("/")} color="inherit">
          Home
        </Button>
      </Toolbar>
    </AppBar>
  )
}
