const express = require("express");
const router = express.Router();
const upload = require("../config/multer");
const imageController = require("../controllers/imageController");

// Definisikan rute dan hubungkan ke controllerrrrr
router.post("/upload", upload.single("image"), imageController.uploadImage);
router.get("/", imageController.getAllImages);

module.exports = router;
