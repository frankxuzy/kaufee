export function get (key) {
  // prevents client code from running on the server-side where 'window' object doesn't exist.
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem(key)
  }
}

export function set (key, value) {
  if (typeof localStorage !== 'undefined') {
    if (value === null) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, value)
    }
  }
}
