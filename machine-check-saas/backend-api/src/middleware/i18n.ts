import { Request, Response, NextFunction } from "express";

const messages: any = {
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

export const i18n = (req: Request, res: Response, next: NextFunction) => {
  const lang = req.headers["accept-language"]?.toString().toLowerCase() || "tr";
  (req as any).t = (key: string) => messages[lang]?.[key] || key;
  next();
};
