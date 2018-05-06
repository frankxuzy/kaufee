export const get = (key) => {
  return localStorage.getItem(key)
}

export const set = (key, value) => {
  if (value === null) {
    localStorage.removeItem(key)
  } else {
    localStorage.setItem(key, value)
  }
}
