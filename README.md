# 🚀 The Inovabeing Build Zone – Internship Assignment Submission

**Product Engineer – AI Web Stack (Internship)**

This project was built as part of the Inovabeing Build Zone challenge. The goal was to demonstrate how I think, build, and deliver a full-stack web application under tight timelines (2 days). The assignment required building a simple yet thoughtful prototype using any tech stack of my choice.

---

## 📝 Assignment Context
- **Challenge:** Build a modern notes app with authentication and real-time database features.
- **Timeline:** Completed and submitted within 2 days.
- **Stack:** Next.js 14, Firebase Auth, Firestore, Tailwind CSS, shadcn/ui, TypeScript.

---

## ✅ Submission Checklist
- [x] **Live demo or deploy link:** _[Add your Vercel/Replit link here]_  
- [x] **Short write-up:** _[Add Notion/Google Doc/PDF link here]_  
- [x] **Tech/tools used:** See below  
- [x] **Loom/video walkthrough:** _[Add Loom/video link here if available]_  
- [x] **Name:** M.Sai Vara Prasad  
- [x] **Contact:** mandalasaivaraprasad@gmail.com

---

# Firebase Notes App

A modern, full-featured notes application built with Next.js 14, Firebase Authentication, and Firestore database.

## Features

- 🔐 **User Authentication**: Email/password signup and login with Firebase Auth
- 📝 **Notes Management**: Create, read, update, and delete notes with real-time sync
- 🎨 **Modern UI**: Clean, responsive design with Tailwind CSS and shadcn/ui components
- 🌙 **Dark Mode**: Toggle between light and dark themes
- 📱 **Mobile Responsive**: Optimized for all device sizes
- ⚡ **Real-time Updates**: Live synchronization of notes across devices
- 🔒 **Protected Routes**: Secure access to user dashboard and notes

## Tech Stack / Tools Used

- **Framework:** Next.js 14 (App Router)
- **Authentication:** Firebase Auth
- **Database:** Firestore
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Language:** TypeScript

## Getting Started

### Prerequisites
- Node.js 18+ installed
- A Firebase project set up

### Firebase Setup
1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Enable Authentication with Email/Password provider
4. Create a Firestore database
5. Get your Firebase configuration from Project Settings

### Installation
1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file in the root directory and add your Firebase configuration:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Deploy to Vercel
1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy!

The app will be automatically deployed and available at your Vercel URL.

## Project Structure
```
├── app/                    # Next.js app directory
│   ├── dashboard/         # Dashboard page
│   ├── login/            # Login page
│   ├── signup/           # Signup page
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── auth/             # Authentication components
│   ├── dashboard/        # Dashboard components
│   ├── ui/               # shadcn/ui components
│   └── theme-provider.tsx
├── lib/                  # Utility libraries
│   └── firebase.ts      # Firebase configuration
└── hooks/                # Custom React hooks
```

## Usage
1. **Sign Up**: Create a new account with email and password
2. **Sign In**: Log in to access your dashboard
3. **Create Notes**: Add new notes with title and content
4. **Edit Notes**: Click the edit button to modify existing notes
5. **Delete Notes**: Remove notes with confirmation dialog
6. **Search**: Find notes by title or content
7. **Theme Toggle**: Switch between light and dark modes

## Features in Detail

### Authentication
- Secure email/password authentication
- Protected routes that redirect to login
- User profile display with account information
- Logout functionality

### Notes Management
- Real-time CRUD operations
- Search functionality
- Responsive card-based layout
- Edit mode with inline forms
- Confirmation dialogs for destructive actions

### UI/UX
- Modern, clean design
- Dark/light theme support
- Mobile-responsive layout
- Loading states and error handling
- Toast notifications for user feedback

## Contributing

Feel free to submit issues and enhancement requests!
⭐ If you found this project useful, consider giving it a star on GitHub!
