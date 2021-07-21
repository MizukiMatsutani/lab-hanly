export default async function({ store, redirect, app: { $axios } }) {
  const token = window.localStorage.getItem('hanly_access_token')
  if (!token) {
    // ユーザーが認証されていないとき
    return redirect('/signin')
  }

  const { data } = await $axios.get('/api/me')
  // 認証確認をするついでに、どのページでも自分のアカウント情報が必要なので、
  // 自分の情報を取得して Vuex Store に保持しておきます。
  store.commit('me/setMe', data)
}

// // 1秒後に値を返すだけの関数、サーバーっぽい挙動にするため。
// function getValueAfter100ms() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         data: {
//           id: 1,
//           image_url: '',
//           nickname: 'test-user',
//           email: 'test@hoge.com',
//           pin: {
//             latitude: 33.58948,
//             longitude: 130.418036,
//             datetime: '2019/11/22 10:08'
//           }
//         }
//       })
//     }, 100)
//   })
// }
