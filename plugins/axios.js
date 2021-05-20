export default function ({ $axios, app, error, store }) {
  $axios.onRequest((config) => {
    config.headers['Access-Control-Allow-Origin'] = '*'
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    config.headers[
      'CB-Timezone'
    ] = Intl.DateTimeFormat().resolvedOptions().timeZone
  })
}
