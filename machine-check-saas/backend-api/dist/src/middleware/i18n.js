"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18n = void 0;
const messages = {
    tr: {
        upload_success: "Yükleme başarılı",
        upload_error: "Yükleme hatası",
        unauthorized: "Yetkisiz erişim",
        // ...diğer mesajlar
    },
    en: {
        upload_success: "Upload successful",
        upload_error: "Upload error",
        unauthorized: "Unauthorized access",
        // ...other messages
    },
};
const i18n = (req, res, next) => {
    var _a;
    const lang = ((_a = req.headers["accept-language"]) === null || _a === void 0 ? void 0 : _a.toString().toLowerCase()) || "tr";
    req.t = (key) => { var _a; return ((_a = messages[lang]) === null || _a === void 0 ? void 0 : _a[key]) || key; };
    next();
};
exports.i18n = i18n;
