function formatDate(value: string) {
  const date = new Date(value)
  const year = date.getFullYear()
  let month = date.getMonth() + 1
  const day = date.getDate()
  let hours = date.getHours()
  let minutes = date.getMinutes()

  return `${year}-${month > 9 ? month.toString() : `0${month}`}-${day} ${
    hours > 9 ? hours : `0${hours}`
  }:${minutes > 9 ? minutes : `0${minutes}`}`
}

function formatMsg(value: string) {
  value.replace(/\n/g, '<br/>').replace(/<br\/>/g, '\r\n')

  return value
}

export { formatDate, formatMsg }
