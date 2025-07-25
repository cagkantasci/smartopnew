# Machine Check SaaS Project

## Project Overview
This project is a Software as a Service (SaaS) application designed for operators using heavy machinery. The system allows operators to perform vehicle checks before starting work, report any faults via a mobile application with photos, and submit these reports for managerial approval. The application also tracks working hours, calculates fuel consumption and costs based on distance, and supports multiple user roles.

## Project Goals
- Enable operators to report machinery issues through a mobile app.
- Allow managers to approve or reject reported issues.
- Track working hours and calculate fuel costs.
- Support multiple user roles: Operator, Manager, and Admin.
- Provide a multi-tenant architecture for different companies to manage their users and machines.

## Technology Stack
- **Backend API**: Node.js + Express + PostgreSQL
- **Mobile Application**: Flutter + Dart
- **Web Admin Panel**: React.js + TypeScript + MUI
- **Authentication**: JWT + Role-Based Access Control
- **File Upload**: Cloudinary / Firebase Storage
- **Notification System**: Firebase Cloud Messaging (FCM)
- **Multi-Language Support**: Turkish, English (i18n)
- **SaaS Support**: Tenant ID structure
- **Deployment**: Railway + Vercel + Supabase

## Directory Structure
```
machine-check-saas/
├── backend-api/          → Express.js + PostgreSQL API
├── mobile-app/           → Flutter (Operator/Mobile Manager)
└── admin-panel/          → React.js Web Panel (Manager + Admin)
```

## Development Stages
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

## Future Modules (Scalable SaaS Structure)
- Offline Support (for Flutter)
- QR Code Machine Recognition
- Calendar Integration (for maintenance dates)
- AI Fault Prediction (photo analysis)
- Subscription System (with Stripe / Iyzico)

## Data Structures (Example)
### User
{
  "id": 1,
  "name": "Ali",
  "email": "ali@example.com",
  "role": "operator",
  "company_id": 2
}

### MachineCheck
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

## Development Tools & Environment
- **Postman**: API testing
- **Code Editor**: Development
- **GitHub**: Repository & Tracking
- **Railway**: Backend deployment
- **Supabase**: Database + storage
- **Firebase FCM**: Notification system

This README provides a comprehensive overview of the Machine Check SaaS project, outlining its goals, technology stack, directory structure, development stages, future enhancements, data structures, and tools used in development.