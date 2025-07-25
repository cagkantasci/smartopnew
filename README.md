Sen ileri seviye bir Fullstack geliştiricisisin. Buna göre bu prompt geliştirmesini benim için yap.
🎯 PROJE AMACI (SaaS Yapı):
İş makinesi kullanan operatörlerin işe başlamadan önce araç kontrolünü yaparak, arızaları mobil uygulama üzerinden fotoğrafla bildirip, yöneticinin onayına sunduğu ve onay sonrası işe başlayabildiği bir sistem geliştir. Sistem ayrıca:

Çalışma saatlerini izler

Mesafe üzerinden yakıt tüketimi ve maliyet hesabı yapar

Üç kullanıcı rolüne sahip olur:

Operatör

Yönetici

Admin (tüm yetkilere sahip)

Uygulama çoklu firma/müşteri desteği ile SaaS modeli şeklinde çalışır. Her firma kendi kullanıcılarını ve makinelerini yönetir.

🧠 TEKNOLOJİ YIĞINI
Katman	Teknoloji
Backend API	Node.js + Express + PostgreSQL
Mobil Uygulama	Flutter + Dart
Web Admin Panel	React.js + TypeScript + MUI
Auth	JWT + Rol Bazlı Yetkilendirme
Dosya Yükleme	Cloudinary / Firebase Storage
Bildirim Sistemi	Firebase Cloud Messaging (FCM)
Çoklu Dil Desteği	TR, EN (i18n)
SaaS Desteği	Tenant ID yapısıyla
Deploy	Railway + Vercel + Supabase

📦 DİZİN YAPISI (Monorepo)
pgsql
Kopyala
Düzenle
machine-check-saas/
│
├── backend-api/          → Express.js + PostgreSQL API
├── mobile-app/           → Flutter (Operatör/Mobil Yönetici)
└── admin-panel/          → React.js Web Panel (Yönetici + Admin)
🚀 YAZILIM GELİŞTİRME AŞAMALARI
✅ AŞAMA 1 — backend-api/: Express API + PostgreSQL
Modüller:

 Kullanıcı Auth (JWT, şifreli login/register)

 Kullanıcı Roller: Admin, Yönetici, Operatör

 Firma ve Tenant yönetimi (SaaS için)

 İş Makinesi modeli ve kontrol listesi

 Kontrol Raporu (zaman, checklist, foto, açıklama)

 Onay/Red mekanizması

 Fotoğraf yükleme (Multer + Cloudinary)

 Çalışma saati başlat/bitir

 Yakıt maliyet hesaplama (mesafe, fiyat)

✅ AŞAMA 2 — mobile-app/: Flutter Uygulaması
Ekranlar:

 Login/Register

 Operatör Paneli

 Makine seçimi

 Kontrol formu doldurma

 Fotoğraf yükleme

 “Arıza bildir” & “İşe başla” akışı

 Mesafe girerek yakıt hesabı alma

 Yöneticinin mobil onay paneli

 Bildirim alma (FCM)

 Çoklu dil seçimi

✅ AŞAMA 3 — admin-panel/: React.js Web Panel
Sayfalar:

 Admin Panel (Tüm firmaları görür)

 Firma Yönetici Paneli

 Operatör yönetimi

 Makine ve kontrol listesi tanımlama

 Gelen kontrol formları

 Onay/Red işlemleri

 Bildirim gönderme

 Raporlar ve istatistikler

 Çoklu dil desteği

🧩 GELECEKTE EKLENECEK MODÜLLER (Scalable SaaS Yapıya Uygun)
 Offline destek (Flutter için)

 QR ile makine tanıma

 Takvim entegrasyonu (bakım tarihleri)

 AI ile arıza tahmini (fotoğraf analizi)

 Abonelik sistemi (Stripe / Iyzico ile)

📈 VERİ YAPILARI (Örnek)
User

json
Kopyala
Düzenle
{
  "id": 1,
  "name": "Ali",
  "email": "ali@example.com",
  "role": "operator",
  "company_id": 2
}
MachineCheck

json
Kopyala
Düzenle
{
  "machine_id": 3,
  "operator_id": 5,
  "checklist": [
    {"item": "Hidrolik yağ seviyesi", "status": "ok"},
    {"item": "Farlar", "status": "faulty", "photo_url": "..."}
  ],
  "status": "pending",
  "created_at": "...",
  "start_time": "...",
  "fuel_estimate": 156.30
}
🛠️ DEV TOOLS & ENV
Tool	Amaç
Postman	API test
VS Code	Tüm geliştirme
GitHub	Repo & Takip
Railway	Backend deploy
Supabase	Veritabanı + storage
Firebase FCM	Bildirim sistemi

