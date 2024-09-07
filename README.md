# Social Dating App

## Description

This project is a real-time messaging and member management system built using Angular and SignalR. It allows users to communicate through a real-time chat, manage their profiles, and interact with other users by liking profiles, sending messages, and managing photos. Admin users can moderate content, approve or reject photos, and manage user roles through a role-based access control system.

## Features

- **Real-Time Messaging & Presence Tracking**
  This system integrates SignalR for real-time communication and presence tracking. Users can engage in real-time conversations with other members while seeing their online status. The messaging interface auto-scrolls to the latest messages, providing a seamless chat experience.

  - SignalR manages connections for real-time messaging.
  - Tracks user presence and displays online status.
  - Auto-scrolls to new messages during conversations.
  - Busy state management improves UI performance during message submission.

- **Photo Moderation & Approval**
  Admin users can approve or reject user photos through the admin panel. Non-approved photos are displayed with overlays in the photo editor, indicating their pending status. This helps ensure that all photos meet the platform's standards.

  - Implemented in AdminService to manage photos.
  - Photo editor component enhanced with approval status.
  - Confirmation dialogs using ConfirmService for user actions.

- **Role-Based Access Control (RBAC)**
  A comprehensive admin panel allows users with specific roles (Admin or Moderator) to manage user accounts and photos. Role-based access control ensures that only authorized users can access sensitive functionalities.

  - AdminPanelComponent manages users and photos.
  - User roles can be edited through a modal dialog.
  - AdminGuard ensures access is restricted to authorized users.

- **Messaging Functionality**
  The platform provides a messaging system with inbox and outbox views, allowing users to send and receive messages easily. Messages are grouped by threads, and users can filter their messages by unread, sent, or received.

  - Supports message pagination and filtering.
  - Enhanced MemberDetailComponent to include message tabs.
  - Auto-scroll to the latest messages in conversations.

- **Likes & Liked Members**
  Users can like other members and view a list of those they have liked. Pagination and filtering ensure smooth navigation through the list of liked members.

  - LikesService handles likes functionality.
  - ListsComponent allows filtering and pagination of liked members.
  - MemberCardComponent displays like status.

- **Member Profile & Management**
  Members can edit their profiles, including updating photos and personal details. Profile updates are protected by a guard to prevent unsaved changes. The system caches user data for performance optimization.

  - Supports pagination for member lists and profile views.
  - Filters based on age, gender, and activity status.
  - Includes photo upload and main photo selection features.

- **Admin Panel for User Management**
  Admin users can manage other users' roles, enabling or disabling specific privileges. This is achieved through a role-based system integrated into the AdminPanelComponent.

  - Users can edit and update their roles in a modal dialog.
  - Admins can approve or reject photos from users.

- **Improved User Experience with Spinners and Loaders**
  Loading indicators improve the user experience by visually displaying when requests are being processed. This functionality is crucial in preventing multiple submissions and providing clear feedback to users during operations.
  - BusyService manages loading state across the application.
  - Loading interceptor adds delay to simulate network lag.

#### Technology Stack

- **Frontend**: Angular, TypeScript
- **Real-Time Communication**: SignalR
- **UI Components**: ngx-bootstrap, FontAwesome
- **Forms & Validation**: Reactive Forms, Custom Form Controls
- **File Upload**: ng2-file-upload
- **Styling**: Bootstrap, Custom CSS
- **Authentication**: JWT Authentication
- **Role Management**: Role-Based Access Control (RBAC)

## Installation

### Prerequisites

- **Node.js** (v16 or higher): Download and install from [Node.js official site](https://nodejs.org/).
- **Angular CLI**: Install globally using the command:
  ```bash
  npm install -g @angular/cli
  ```

### Environment Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/elvan/social-dating-app-frontend-angular.git
   ```
2. Navigate to the project directory:
   ```bash
   cd social-dating-app-frontend-angular
   ```
3. Install the project dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   - Create an `environment.ts` file in the `src/environments` folder based on the `environment.example.ts`.
   - Configure the API URLs for your development and production environments.

### Installation Commands

```bash
npm install
ng serve
```

This will start the project in development mode. The application will be available at `http://localhost:4200`.

## Usage

1. **User Registration**: New users can register by providing personal details and selecting a profile photo.
2. **Login/Logout**: Once registered, users can log in using their credentials.
3. **Profile Management**: Users can update their profile details, upload photos, and manage liked members.
4. **Messaging**: Users can send and receive messages in real-time through the message threads.
5. **Admin Panel**: Admins can manage user roles, approve or reject photos, and moderate the platform content.

For a real-time messaging experience, ensure that SignalR is properly configured and running on the backend.
