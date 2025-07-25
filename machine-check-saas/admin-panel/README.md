# Admin Panel Documentation

## Overview
The Admin Panel is a React-based web application that serves as the management interface for the machine check SaaS project. It allows administrators and managers to oversee operations, manage users, and handle machine check processes.

## Features
- **User Management**: Admins can view, add, edit, and delete users.
- **Machine Management**: Admins can manage machines and their associated checklists.
- **Control Forms**: Admins can review and approve/reject control forms submitted by operators.
- **Notifications**: Admins receive notifications for important updates and actions.
- **Reports and Statistics**: Access to various reports and statistics related to machine usage and maintenance.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the admin-panel directory:
   ```
   cd machine-check-saas/admin-panel
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm start
```
The application will be available at `http://localhost:3000`.

### Building for Production
To create a production build, run:
```
npm run build
```
The build artifacts will be stored in the `build` directory.

## Directory Structure
- `src/`: Contains the source code for the admin panel.
  - `App.tsx`: Main application component.
  - `components/`: Reusable components such as the sidebar.
  - `pages/`: Contains different pages of the application, including the dashboard.
  - `services/`: API service functions for backend communication.
  - `types/`: TypeScript interfaces for data structures.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.