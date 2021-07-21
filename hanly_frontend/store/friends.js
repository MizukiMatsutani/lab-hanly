export const state = () => ({
  friends: [],
  isPinning: false
})

export const getters = {
  friends: state => state.friends,
  isPinning: state => state.isPinning
}

export const mutations = {
  setFriends(state, list) {
    state.friends = list
  },
  addFriends(state, list) {
    state.friends = state.friends.concat(list)
  },
  setPinning(state, isPinning) {
    state.isPinning = isPinning
  }
}

export const actions = {
  async fetchFriends({ commit }) {
    const { data } = await this.$axios.get('/api/friends')
    commit('setFriends', data)
  },
  async pinAndMakeFriends({ commit }, { latitude, longitude }) {
    commit('setPinning', true) // ピンを打ってる状態にする
    // 緯度経度を渡してピンを打つAPI
    const { data } = await this.$axios.post('/api/my/pin', {
      latitude,
      longitude
    })
    commit('setPinning', false) // ピンを打ち終わったら、ピンを打ってる状態を解除
    commit('addFriends', data) // 新しく友達になった人一覧が入ってるので mutations に渡す
  }
}

// function mockApi() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         data: [
//           {
//             id: 1,
//             nickname: 'Mizuki Matsutani',
//             image_url:
//               'https://avatars3.githubusercontent.com/u/5304793?s=40&v=4',
//             email: 'matsutani@e3sys.co.jp',
//             pin: {
//               datetime: '2020-03-21T17:03:32.509Z',
//               latitude: 33.58948,
//               longitude: 130.418036
//             }
//           },
//           {
//             id: 2,
//             nickname: 'Test User',
//             image_url: null,
//             email: 'hoge@test.com',
//             pin: null
//           },
//           {
//             id: 3,
//             nickname: 'Michael Hanashima',
//             image_url: null,
//             email: 'hoge@test.com',
//             pin: null
//           }
//         ]
//       })
//     }, 100)
//   })
// }

// function mockPinApi(latitude, longitude) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         data: [
//           {
//             id: 100,
//             nickname: 'New Frined',
//             image_url: null,
//             email: 'new_friend@test.com',
//             pin: {
//               datetime: '2020-03-30T10:15:58.100Z',
//               latitude: 33.58948,
//               longitude: 130.418036
//             }
//           }
//         ]
//       })
//     }, 100)
//   })
// }
