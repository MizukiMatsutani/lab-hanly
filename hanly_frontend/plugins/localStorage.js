export default ({ app: { $axios } }) => {
  const token = window.localStorage.getItem('hanly_access_token')
  if (token) {
    $axios.setToken(token, 'Bearer')
  }
}
