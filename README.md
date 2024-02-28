# SocialDating

## Description

SocialDating is a dynamic web application designed to facilitate user interactions and networking. It aims to connect users through features like messaging, photo sharing, and live chat functionalities. The project leverages the latest web technologies to create a seamless and interactive user experience, emphasizing real-time communication and social engagement.

## Features

### Real-time Messaging and Chat

- **Live Chat Functionality**: Implemented using SignalR to offer real-time communication among users.
- **Message Sending and Deletion**: Users can send messages to others and delete them.
- **Auto-scrolling Messages**: Enhances user experience by automatically scrolling to the latest message in a conversation.

### User Interaction and Profiles

- **Photo Management**: Users can upload photos, set a main photo, and delete photos, enhancing their profile customization.
- **Like Feature**: Users can express interest in other users by liking their profiles, with the ability to view users who liked them or users they've liked.
- **Detailed User Profiles**: Implemented detailed user resolvers and models to display comprehensive information, including a live presence indicator to show online status.

### Security and Error Handling

- **JWT Authentication**: Secure API calls with JWT tokens and implement an interceptor for attaching tokens to HTTP requests.
- **Error Handling**: Global error handling using an HTTP interceptor and user-friendly notifications with ToastrService.
- **Route Guards**: Protect routes with authentication guards and unsaved changes guards to prevent data loss.

### User Experience Enhancements

- **Custom Form Controls**: For registration, including date pickers and text inputs with dynamic validation.
- **Loading Indicators**: Utilize ngx-spinner to provide feedback during HTTP requests, improving the overall user experience.
- **Environment-Specific Configurations**: Optimize the application for production with environment-specific settings.

#### Technology Stack

- Angular
- RxJS
- SignalR
- ngx-bootstrap
- ngx-spinner
- ngx-toastr
- Bootstrap and Bootswatch

## Installation

### Prerequisites

- Node.js and npm
- Angular CLI

### Environment Setup

1. Clone the repository: `git clone https://github.com/elvan/social-dating-app-frontend-angular.git`
2. Navigate to the project directory: `cd social-dating-app-frontend-angular`

### Installation Commands

1. Install dependencies: `npm install`
2. Run the development server: `ng serve`
3. Access the application at: `http://localhost:4200/`

## Usage

After installation, log in or register to access the main features. Users can edit their profiles, upload photos, and engage with other users through likes and real-time messaging. The admin panel allows role-based access control for managing user roles and permissions.

- **Navigating the Application**: Use the navigation bar to access different sections like user profiles, messages, and lists of likes.
- **Interacting with Users**: Visit user profiles to send messages or like their profiles. Use the live chat for real-time communication.
- **Managing Your Profile**: Update your profile information, manage your photos, and customize your presence on the platform.

SocialDating aims to provide a rich platform for building connections and fostering communication among users.
