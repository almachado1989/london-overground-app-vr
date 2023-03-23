export function trimStationName(stationName) {
  return stationName
    .replace(" Underground Station", "")
    .replace(" Rail Station", "")
    .replace(" Station", "")
    .replace(" (London)", "")
    .replace("London Euston", "Euston")
    .replace("London Liverpool Street", "Liverpool Street")
    .replace("H&C", "Hammersmith & City")
    .replace(" Underground Stn", "")
    .replace("Dist&Picc", "District & Picadilly")
    .replace("DLR", "")
}

export function getFirstWord(string) {
  const index = string.indexOf(" ")
  if (index === -1) return string.toLowerCase()
  return string.toLowerCase().slice(0, index)
}

export function addDays(date, days) {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return dateToYMD(result)
}

export function dateToYMD(date) {
  const d = date.getDate()
  const m = date.getMonth() + 1
  const y = date.getFullYear()
  return "" + y + "-" + (m <= 9 ? "0" + m : m) + "-" + (d <= 9 ? "0" + d : d)
}

export function padNumber(number) {
  number = number.toString()
  while (number.length < 4) {
    number = "0" + number
  }
  return number
}
