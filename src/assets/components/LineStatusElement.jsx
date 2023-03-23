import { Typography, Box } from "@mui/material"
import { useState } from "react"
import { getFirstWord } from "../../functions/helpers"

export default function LineStatusElement(props) {
  const [showDetails, setShowDetails] = useState(false)
  return (
    <Typography
      sx={{ color: "white" }}
      component={"div"}
      className="line-status-entry"
    >
      <span
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
      {showDetails && props.line.details && (
        <Box className="line-status-details">
          <p>{props.line.details}</p>
        </Box>
      )}
    </Typography>
  )
}
