const ImageKit = require("imagekit");

const { IMAGEKIT_PUBLIC_KEY, IMAGEKIT_SECRET_KEY, IMAGEKIT_URL_ENDPOINT } =
	process.env;

const imagekit = new ImageKit({
	publicKey: IMAGEKIT_PUBLIC_KEY, // Menggunakan nilai dari process.envd
	privateKey: IMAGEKIT_SECRET_KEY, // Menggunakan nilai dari process.env
	urlEndpoint: IMAGEKIT_URL_ENDPOINT, // Menggunakan nilai dari process.env
});

module.exports = imagekit;
