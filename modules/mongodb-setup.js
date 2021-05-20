import mongo from '../api/mongo.js'

export default function () {
  this.nuxt.hook('render:setupMiddleware', async () => {
    await mongo.connect()
  })
}
