# Mobile App Documentation

## Overview
This mobile application is designed for operators using heavy machinery. It allows operators to perform vehicle checks before starting work, report any faults via photographs, and submit these reports for managerial approval. The application is part of a larger SaaS system that supports multiple companies and user roles.

## Features
- **User Authentication**: Secure login and registration for operators and managers.
- **Machine Selection**: Operators can select the machine they are working with.
- **Checklists**: Operators can fill out control forms to report the status of machinery.
- **Photo Upload**: Users can upload photos of any faults directly through the app.
- **Approval Workflow**: Managers can approve or reject reports submitted by operators.
- **Fuel Cost Estimation**: Operators can input distance to calculate fuel costs.
- **Notifications**: Users receive notifications for approvals and updates.
- **Multi-language Support**: The app supports Turkish and English.

## Project Structure
- **lib/**: Contains the main application code.
  - **main.dart**: Entry point of the Flutter application.
  - **screens/**: Contains all the screen widgets.
    - **login_screen.dart**: UI and logic for user login.
  - **models/**: Contains data models used in the application.
    - **user.dart**: User model representing user data.
  - **services/**: Contains services for API calls.
    - **api_service.dart**: Functions for making API requests.
  - **widgets/**: Contains reusable widgets.
    - **custom_button.dart**: Custom button widget used throughout the app.

## Setup Instructions
1. **Clone the Repository**: 
   ```
   git clone <repository-url>
   ```
2. **Navigate to the Mobile App Directory**:
   ```
   cd mobile-app
   ```
3. **Install Dependencies**:
   ```
   flutter pub get
   ```
4. **Run the Application**:
   ```
   flutter run
   ```

## Future Enhancements
- Offline support for the mobile application.
- QR code scanning for machine identification.
- Calendar integration for maintenance scheduling.
- AI-based fault prediction using image analysis.
- Subscription management through payment gateways.

## Contribution
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.