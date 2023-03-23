import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
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
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
        <Button onClick={() => navigate("/")} color="inherit">
          Home
        </Button>
      </Toolbar>
    </AppBar>
  )
}
