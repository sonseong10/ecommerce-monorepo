function formatMsg(value: string) {
  value.replace(/\n/g, '<br/>').replace(/<br\/>/g, '\r\n')

  return value
}

export { formatMsg }
