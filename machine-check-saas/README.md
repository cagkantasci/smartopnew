# Machine Check SaaS Project / Makine Kontrolü SaaS Projesi

[🇺🇸 English](#english) | [🇹🇷 Türkçe](#turkce)

---

## English

### Project Overview
This project is a Software as a Service (SaaS) application designed for operators using heavy machinery. The system allows operators to perform vehicle checks before starting work, report any faults via a mobile application with photos, and submit these reports for managerial approval. The application also tracks working hours, calculates fuel consumption and costs based on distance, and supports multiple user roles.

### Project Goals
- Enable operators to report machinery issues through a mobile app.
- Allow managers to approve or reject reported issues.
- Track working hours and calculate fuel costs.
- Support multiple user roles: Operator, Manager, and Admin.
- Provide a multi-tenant architecture for different companies to manage their users and machines.

---

## Türkçe

### Proje Genel Bakış
Bu proje, ağır makine operatörleri için tasarlanmış bir Hizmet Olarak Yazılım (SaaS) uygulamasıdır. Sistem, operatörlerin işe başlamadan önce araç kontrolleri yapmalarına, mobil uygulama üzerinden fotoğraflarla birlikte arızaları bildirmelerine ve bu raporları yönetici onayına sunmalarına olanak tanır. Uygulama ayrıca çalışma saatlerini takip eder, mesafeye göre yakıt tüketimini ve maliyetlerini hesaplar ve çoklu kullanıcı rollerini destekler.

### Proje Hedefleri
- Operatörlerin mobil uygulama üzerinden makine sorunlarını bildirmelerini sağlamak.
- Yöneticilerin bildirilen sorunları onaylamasına veya reddetmesine olanak tanımak.
- Çalışma saatlerini takip etmek ve yakıt maliyetlerini hesaplamak.
- Çoklu kullanıcı rollerini desteklemek: Operatör, Yönetici ve Admin.
- Farklı şirketlerin kullanıcılarını ve makinelerini yönetmeleri için çok kiracılı mimari sağlamak.

---

## Technology Stack / Teknoloji Yığını

### English
- **Backend API**: Node.js + Express + PostgreSQL
- **Mobile Application**: Flutter + Dart
- **Web Admin Panel**: React.js + TypeScript + MUI
- **Authentication**: JWT + Role-Based Access Control
- **File Upload**: Cloudinary / Firebase Storage
- **Notification System**: Firebase Cloud Messaging (FCM)
- **Multi-Language Support**: Turkish, English (i18n)
- **SaaS Support**: Tenant ID structure
- **Deployment**: Railway + Vercel + Supabase

### Türkçe
- **Backend API**: Node.js + Express + PostgreSQL
- **Mobil Uygulama**: Flutter + Dart
- **Web Admin Paneli**: React.js + TypeScript + MUI
- **Kimlik Doğrulama**: JWT + Rol Tabanlı Erişim Kontrolü
- **Dosya Yükleme**: Cloudinary / Firebase Storage
- **Bildirim Sistemi**: Firebase Cloud Messaging (FCM)
- **Çoklu Dil Desteği**: Türkçe, İngilizce (i18n)
- **SaaS Desteği**: Kiracı ID yapısı
- **Dağıtım**: Railway + Vercel + Supabase

---

## Directory Structure / Dizin Yapısı

```
machine-check-saas/
├── backend-api/          → Express.js + PostgreSQL API
├── mobile-app/           → Flutter (Operator/Mobile Manager)
└── admin-panel/          → React.js Web Panel (Manager + Admin)
```

---

## Development Stages / Geliştirme Aşamaları

### English
1. **Backend API**: Implement Express API with PostgreSQL.
   - User Authentication (JWT, encrypted login/register)
   - User Roles: Admin, Manager, Operator
   - Company and Tenant Management (for SaaS)
   - Machine Model and Checklists
   - Control Reports (time, checklist, photo, description)
   - Approval/Rejection Mechanism
   - Photo Upload (Multer + Cloudinary)
   - Start/End Working Hours
   - Fuel Cost Calculation (distance, price)

2. **Mobile Application**: Develop Flutter application.
   - Screens: Login/Register, Operator Panel, Machine Selection, Control Form, Photo Upload, Issue Reporting & Start Work Flow, Fuel Calculation, Manager Approval Panel, Notifications (FCM), Multi-language Selection.

3. **Admin Panel**: Create React.js Web Panel.
   - Pages: Admin Panel (view all companies), Company Manager Panel, Operator Management, Machine and Checklist Definition, Incoming Control Forms, Approval/Rejection Processes, Notification Sending, Reports and Statistics, Multi-language Support.

### Türkçe
1. **Backend API**: PostgreSQL ile Express API geliştirmek.
   - Kullanıcı Kimlik Doğrulaması (JWT, şifreli giriş/kayıt)
   - Kullanıcı Rolleri: Admin, Yönetici, Operatör
   - Şirket ve Kiracı Yönetimi (SaaS için)
   - Makine Modeli ve Kontrol Listeleri
   - Kontrol Raporları (zaman, kontrol listesi, fotoğraf, açıklama)
   - Onay/Red Mekanizması
   - Fotoğraf Yükleme (Multer + Cloudinary)
   - Çalışma Saatlerini Başlatma/Bitirme
   - Yakıt Maliyet Hesaplama (mesafe, fiyat)

2. **Mobil Uygulama**: Flutter uygulaması geliştirmek.
   - Ekranlar: Giriş/Kayıt, Operatör Paneli, Makine Seçimi, Kontrol Formu, Fotoğraf Yükleme, Sorun Bildirimi & İşe Başlama Akışı, Yakıt Hesaplama, Yönetici Onay Paneli, Bildirimler (FCM), Çoklu Dil Seçimi.

3. **Admin Paneli**: React.js Web Paneli oluşturmak.
   - Sayfalar: Admin Paneli (tüm şirketleri görüntüleme), Şirket Yöneticisi Paneli, Operatör Yönetimi, Makine ve Kontrol Listesi Tanımlama, Gelen Kontrol Formları, Onay/Red İşlemleri, Bildirim Gönderme, Raporlar ve İstatistikler, Çoklu Dil Desteği.

---

## Future Modules (Scalable SaaS Structure) / Gelecek Modüller (Ölçeklenebilir SaaS Yapısı)

### English
- Offline Support (for Flutter)
- QR Code Machine Recognition
- Calendar Integration (for maintenance dates)
- AI Fault Prediction (photo analysis)
- Subscription System (with Stripe / Iyzico)

### Türkçe
- Çevrimdışı Destek (Flutter için)
- QR Kod Makine Tanıma
- Takvim Entegrasyonu (bakım tarihleri için)
- AI Arıza Tahmini (fotoğraf analizi)
- Abonelik Sistemi (Stripe / Iyzico ile)

---

## Data Structures (Example) / Veri Yapıları (Örnek)

### User / Kullanıcı
```json
{
  "id": 1,
  "name": "Ali",
  "email": "ali@example.com",
  "role": "operator",
  "company_id": 2
}
```

### MachineCheck / Makine Kontrolü
```json
{
  "machine_id": 3,
  "operator_id": 5,
  "checklist": [
    {"item": "Hydraulic oil level", "status": "ok"},
    {"item": "Lights", "status": "faulty", "photo_url": "..."}
  ],
  "status": "pending",
  "created_at": "...",
  "start_time": "...",
  "fuel_estimate": 156.30
}
```

---

## Development Tools & Environment / Geliştirme Araçları ve Ortamı

### English
- **Postman**: API testing
- **Code Editor**: Development
- **GitHub**: Repository & Tracking
- **Railway**: Backend deployment
- **Supabase**: Database + storage
- **Firebase FCM**: Notification system

### Türkçe
- **Postman**: API testi
- **Kod Editörü**: Geliştirme
- **GitHub**: Depo ve Takip
- **Railway**: Backend dağıtımı
- **Supabase**: Veritabanı + depolama
- **Firebase FCM**: Bildirim sistemi

---

## Summary / Özet

**English:** This README provides a comprehensive overview of the Machine Check SaaS project, outlining its goals, technology stack, directory structure, development stages, future enhancements, data structures, and tools used in development.

**Türkçe:** Bu README, Makine Kontrolü SaaS projesinin kapsamlı bir genel bakışını sunar, hedeflerini, teknoloji yığınını, dizin yapısını, geliştirme aşamalarını, gelecek geliştirmelerini, veri yapılarını ve geliştirmede kullanılan araçları özetler.