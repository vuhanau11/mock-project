export default function AuthHeader() {
  const user = JSON.parse(localStorage.getItem('user'))

  if (user && user.accessToken) {
    return { 'access-token': user.accessToken }
  } else {
    return {}
  }
}
