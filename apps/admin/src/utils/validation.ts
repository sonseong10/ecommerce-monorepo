function validateEmail(email: string) {
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(String(email).toLowerCase())
}

function validateName(name: string) {
  const reg = /^[가-힣a-zA-Z]+$/
  return reg.test(name)
}

function validatePhone(phone: string) {
  const reg = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/
  return reg.test(phone)
}

export { validateEmail, validateName, validatePhone }
