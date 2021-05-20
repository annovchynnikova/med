const express = require('express')
const router = express.Router()
const doctorController = require('../controller/doctorController')
const upload = require('../../config/multer')
router.get('/', doctorController.getAllDoctors)
router.post('/', upload.upload.single('doctor'), doctorController.addNewDoctor)
router.delete('/:doctorId', doctorController.deleteDoctor)
module.exports = router
