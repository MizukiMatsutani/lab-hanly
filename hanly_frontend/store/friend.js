export const state = () => ({
  id: 0,
  image_url: '',
  nickname: '',
  pin: undefined
})

export const getters = {
  id: state => state.id,
  image_url: state => state.image_url,
  nickname: state => state.nickname,
  datetime: state => (state.pin ? state.pin.datetime : ''),
  latitude: state => (state.pin ? state.pin.latitude : 0),
  longitude: state => (state.pin ? state.pin.longitude : 0)
}

export const mutations = {
  setFriend(state, { id, image_url, nickname, pin }) {
    state.id = id
    state.image_url = image_url
    state.nickname = nickname
    state.pin = pin
  },
  clearFriend(state) {
    state.id = 0
    state.image_url = ''
    state.nickname = ''
    state.pin = undefined
  }
}

export const actions = {
  async fetchFriend({ commit }, { friendId }) {
    const { data } = await this.$axios.get('/api/friends/' + friendId)
    commit('setFriend', data)
  }
}

// function mockApi() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         data: {
//           id: 1,
//           nickname: 'Mizuki Matsutani',
//           image_url:
//             'https://avatars3.githubusercontent.com/u/5304793?s=40&v=4',
//           email: 'matsutani@e3sys.co.jp',
//           pin: {
//             latitude: 33.58948,
//             longitude: 130.418036,
//             datetime: '2020-03-21T17:03:32.509Z'
//           }
//         }
//       })
//     }, 100)
//   })
// }
