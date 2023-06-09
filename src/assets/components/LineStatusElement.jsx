import { Typography, Box, useMediaQuery, useTheme } from "@mui/material"
import { useState } from "react"
import { getFirstWord } from "../../functions/helpers"

export default function LineStatusElement(props) {
  const [showDetails, setShowDetails] = useState(false)
  const theme = useTheme()
  const query = useMediaQuery(theme.breakpoints.up("sm"))

  return (
    <Typography component={"div"} className="line-status-entry">
      <span
        className={props.line.line}
        style={{
          backgroundColor: `var(--${getFirstWord(props.line.line)})`,
        }}
      >
        {props.journeyNow && <>{props.line.line}</>}
      </span>
      <span
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
        className={getFirstWord(props.line.status) + " line-status-simple"}
      >
        {props.journeyNow && <>{props.line.status}</>}
      </span>
      {showDetails && props.line.details && query && (
        <Box className="line-status-details">
          <p>{props.line.details}</p>
        </Box>
      )}
    </Typography>
  )
}
