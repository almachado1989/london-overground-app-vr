import { Button } from "@mui/material"

export default function JourneyNextPrev(props) {
  return (
    <div className="journey-next-prev">
      {props.journeyIndex > 0 && (
        <Button
          style={{ marginRight: "auto" }}
          className="previous"
          onClick={() => props.setJourneyIndex((prevIndex) => prevIndex - 1)}
          variant="text"
        >
          Previous
        </Button>
      )}
      {props.journeyIndex < props.journey.length && (
        <Button
          style={{ marginLeft: "auto" }}
          className="next"
          onClick={
            props.journeyIndex === props.journey.length - 1
              ? () =>
                  props.searchLater(
                    props.journey[props.journey.length - 1].legs[0]
                      .departureTime
                  )
              : () => props.setJourneyIndex((prevIndex) => prevIndex + 1)
          }
          variant="text"
        >
          Next
        </Button>
      )}
    </div>
  )
}
