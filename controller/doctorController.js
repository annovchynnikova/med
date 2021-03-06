const mongoose = require('mongoose')
const Music = require('../api/model/Music')
exports.getAllMusics = async (req, res) => {
  try {
    const music = await Music.find()
    res.status(200).json(music)
  } catch (err) {
    res.status(500).json(err)
  }
}
exports.addNewMusic = async (req, res) => {
  try {
    const music = new Music({
      title: req.body.title,
      artist: req.body.artist,
      music: req.file,
    })

    const newMusic = await music.save()
    res.status(200).json({ data: newMusic })
  } catch (err) {
    res.status(500).json({ error: err })
  }
}
exports.deleteMusic = async (req, res) => {
  try {
    const id = req.params.musicId
    const result = await Music.remove({ _id: id })
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json(err)
  }
}
