import { useEffect, useState } from "react"
import LineStatusElement from "./LineStatusElement"
import { MODES } from "../../variables/global"

export default function LineStatus(props) {
  const [loading, setLoading] = useState(true)
  const [statusData, setStatusData] = useState("")

  function storeStatusData(data) {
    let lineData = []
    data.forEach((line) => {
      lineData = [...lineData, ...line]
    })
    const statusArray = lineData.map((entry) => {
      return {
        line: entry.name,
        status: entry.lineStatuses[0].statusSeverityDescription,
        details: entry.lineStatuses[0].reason,
      }
    })
    setStatusData(statusArray)
    setLoading(false)
  }

  useEffect(() => {
    const promises = []
    MODES.forEach((mode) => {
      promises.push(
        fetch(`https://api.tfl.gov.uk//Line/Mode/${mode}/Status`)
          .then((response) => response.json())
          .catch((error) => console.error(error))
      )
    })

    Promise.all(promises).then((result) => storeStatusData(result))
  }, [])

  return (
    <div className="line-status">
      {statusData &&
        !loading &&
        statusData.map((line, idx) => {
          return (
            <LineStatusElement
              line={line}
              key={idx}
              journeyNow={props.journeyNow}
            />
          )
        })}
    </div>
  )
}
