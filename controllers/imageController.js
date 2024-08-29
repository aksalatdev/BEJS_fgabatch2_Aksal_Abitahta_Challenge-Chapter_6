const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const imagekit = require("../config/imagekit");

// upload gambar
exports.uploadImage = async (req, res) => {
	try {
		const { title, description } = req.body;
		const file = req.file;

		// Periksa apakah file ada
		if (!file) {
			return res.status(400).json({ error: "No file uploaded" });
		}
		// console.log('File received:', file);
		//         console.log('File path:', file.path);
		//     console.log('File buffer:', file.buffer);

		// upload gambar ke imagekit.io
		const uploadResponse = await imagekit.upload({
			file: file.buffer,
			fileName: file.originalname,
			folder: "/uploads",
		});
		//  console.log('ImageKit response:', uploadResponse);

		// simpan data gambar ke database
		const image = await prisma.image.create({
			data: {
				title: title,
				description: description,
				imageUrl: uploadResponse.url,
				uploadDate: new Date(),
				dimensions: `width: ${uploadResponse.width} px, height: ${uploadResponse.height} px`,
				fileSize: `${Math.round(uploadResponse.size / 1024)} KB`, // in KB
				fileType: uploadResponse.fileType,
			},
		});

		res.status(201).json({
			message: "Upload file sukses",
			image,
		});
	} catch (error) {
		res.status(500).json({
			error: "Upload file gagal",
			details: error.message,
		});
	}
};

// Lihat daftar gambar
exports.getAllImages = async (req, res) => {
	try {
		const images = await prisma.image.findMany({
			select: {
				id: true,
				title: true,
				description: true,
				imageUrl: true,
			},
		});
		res.json(images);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch images" });
	}
};

// Misal get image details
exports.getImageDetails = async (req, res) => {
	const { id } = req.params;

	try {
		const image = await prisma.image.findUnique({
			where: { id: Number(id) },
		});
		if (!image) {
			return res.status(404).json({ error: "Gambar Tidak Ditemukan" });
		}
		res.status(200).json(image);
	} catch (error) {
		res.status(500).json({ error: "Gagal Mengambil Detail Gambar" });
	}
};

// Delete image
exports.deleteImage = async (req, res) => {
	const { id } = req.params;

	try {
		await prisma.image.delete({
			where: { id: Number(id) },
		});
	} catch (error) {
		res.status(500).json({ error: "Gagal Menghapus Gambar" });
	}
};

// Update Image
exports.updateImage = async (req, res) => {
	const { id } = req.params;
	const { title, description } = req.body;

	try {
		const updatedImage = await prisma.image.update({
			where: { id: Number(id) },
			data: { title, description },
		});
		res.status(200).json(updatedImage);
	} catch (error) {
		res.status(500).json({ error: "Gagal mengupdate gambar" });
	}
};
