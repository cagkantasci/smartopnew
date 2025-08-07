"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.predictFailure = void 0;
const predictFailure = async (req, res) => {
    // Gerçek projede burada bir AI servis API'sine fotoğraf gönderilir
    // Şimdilik örnek cevap dönüyoruz
    const { photoUrl } = req.body;
    // Dummy: Fotoğraf URL'sinde 'leak' varsa arıza var diyoruz
    if (photoUrl && photoUrl.includes("leak")) {
        return res.json({ prediction: "Arıza tespit edildi: Hidrolik kaçak" });
    }
    res.json({ prediction: "Arıza tespit edilmedi" });
};
exports.predictFailure = predictFailure;
