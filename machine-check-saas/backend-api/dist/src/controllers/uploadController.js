"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadMultiplePhotos = exports.uploadPhoto = void 0;
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
const uploadPhoto = async (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).json({ message: "Dosya gerekli" });
    }
    // Dosya tipi kontrolü
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif"];
    if (!allowedTypes.includes(file.mimetype)) {
        return res.status(400).json({ message: "Sadece resim dosyaları yüklenebilir" });
    }
    // Dosya boyutu limiti (ör: 5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
        return res.status(400).json({ message: "Dosya boyutu 5MB'dan büyük olamaz" });
    }
    try {
        cloudinary_1.v2.uploader.upload_stream({ resource_type: "image" }, (error, result) => {
            if (error) {
                console.error("Cloudinary yükleme hatası:", error);
                return res.status(500).json({ message: "Yükleme hatası", error });
            }
            if (!result) {
                return res.status(500).json({ message: "Yükleme sonucu alınamadı" });
            }
            // Başarılı yükleme logu
            console.log(`Dosya yüklendi: ${result.secure_url}`);
            res.json({
                url: result.secure_url,
                public_id: result.public_id,
                format: result.format,
                bytes: result.bytes,
                original_filename: file.originalname,
                size: file.size,
                message: "Yükleme başarılı"
            });
        }).end(file.buffer);
    }
    catch (err) {
        console.error("Yükleme hatası:", err);
        res.status(500).json({ message: "Yükleme hatası", error: err });
    }
};
exports.uploadPhoto = uploadPhoto;
// Çoklu dosya yükleme için altyapı (isteğe bağlı)
const uploadMultiplePhotos = async (req, res) => {
    const files = req.files;
    if (!files || !(files instanceof Array) || files.length === 0) {
        return res.status(400).json({ message: "En az bir dosya gerekli" });
    }
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif"];
    const maxSize = 5 * 1024 * 1024;
    const results = [];
    let errorCount = 0;
    for (const file of files) {
        if (!allowedTypes.includes(file.mimetype)) {
            results.push({ error: "Sadece resim dosyaları yüklenebilir", file: file.originalname });
            errorCount++;
            continue;
        }
        if (file.size > maxSize) {
            results.push({ error: "Dosya boyutu 5MB'dan büyük olamaz", file: file.originalname });
            errorCount++;
            continue;
        }
        await new Promise((resolve) => {
            cloudinary_1.v2.uploader.upload_stream({ resource_type: "image" }, (error, result) => {
                if (error || !result) {
                    results.push({ error: "Yükleme hatası", file: file.originalname });
                    errorCount++;
                }
                else {
                    results.push({
                        url: result.secure_url,
                        public_id: result.public_id,
                        format: result.format,
                        bytes: result.bytes,
                        original_filename: file.originalname,
                        size: file.size,
                        message: "Yükleme başarılı"
                    });
                }
                resolve(null);
            }).end(file.buffer);
        });
    }
    res.json({ results, errorCount });
};
exports.uploadMultiplePhotos = uploadMultiplePhotos;
