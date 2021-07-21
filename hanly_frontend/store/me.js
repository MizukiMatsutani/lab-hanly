export const state = () => ({
  id: 0,
  image_url: '',
  nickname: '',
  email: '',
  pin: undefined
})

export const getters = {
  id: state => state.id,
  image_url: state => state.image_url,
  email: state => state.email,
  nickname: state => state.nickname,
  datetime: state => (state.pin ? state.pin.datetime : ''),
  latitude: state => (state.pin ? state.pin.latitude : 0),
  longitude: state => (state.pin ? state.pin.longitude : 0)
}

export const mutations = {
  setMe(state, { id, image_url, email, nickname, pin }) {
    state.id = id
    state.image_url = image_url
    state.email = email
    state.nickname = nickname
    state.pin = pin
  },
  updateImage(state, url) {
    state.image_url = url
  }
}
