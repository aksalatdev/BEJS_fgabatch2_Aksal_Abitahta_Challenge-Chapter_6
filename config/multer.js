const multer = require("multer");
const path = require("node:path");

// setting penyimpanan multer
const storage = multer.memoryStorage({
	destination: (req, file, cb) => {
		cb(null, "uploads/"); // direktori penyimpanan upload  fileesssdaassdssss
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + path.extname(file.originalname)); // nama file yang di upload + tanggal
	},
});

const upload = multer({ storage: storage });

module.exports = upload;
