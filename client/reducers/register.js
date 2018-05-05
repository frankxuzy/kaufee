export default function (registerStatus = false, action) {
  switch (action.type) {
    case 'SHOW_REGISTERSTATUS':
      return registerStatus

    case 'CHANGE_REGISTERSTATUS':
      return action.registerStatus

    default:
      return registerStatus
  }
}
