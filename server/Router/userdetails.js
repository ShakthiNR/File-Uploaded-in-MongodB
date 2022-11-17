const express = require('express')
const multer = require('multer')
const { uploadData, getData, createData, deleteData, updateData, getUserId } = require('../controllers/userdetails')
const router = express.Router()

var upload = multer({dest:'uploads/'})

router.param("userId",getUserId)

router.post("/upload",upload.single('file'),uploadData)
router.get("/get/data",getData)


router.post("/create/data",createData)
router.delete("/delete/data/:userId",deleteData)
router.put("/update/data/:userId",updateData)

module.exports=router