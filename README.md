# 🚀 The Inovabeing Build Zone – Internship Assignment Submission

**AI Web Stack (Internship)**

This project was built as part of the Inovabeing Build Zone challenge. The goal was to demonstrate how I think, build, and deliver a full-stack web application under tight timelines (2 days). The assignment required building a simple yet thoughtful prototype using any tech stack of my choice.

![image](https://github.com/user-attachments/assets/a1f12631-c67b-4f6b-8ac0-7c4e1783658a)

---

## 📝 Assignment Context
- **Challenge:** Build a modern notes app with authentication and real-time database features.
- **Timeline:** Completed and submitted within 2 days.
- **Stack:** Next.js 14, Firebase Auth, Firestore, Tailwind CSS, shadcn/ui, TypeScript.

---

## ✅ Submission Checklist
- [x] **Deployed link:** _[[Vercel Link](https://inovabeing-intern-assignment.vercel.app/)]_  
- [x] **Short write-up:** _[[Notion Doc]](https://www.notion.so/Firebase-Notes-App-INovaBeing-Internship-Submission-2204857aa4af80ae90d8ec310ee2bfd2?source=copy_link)_  
- [x] **Loom/video walkthrough:** _[[Loom Video](https://www.loom.com/share/735c98a6bb7c4e70bbbaf8fd870ebf6a?sid=2cd5a231-083a-4d2f-87a5-1fa14058ed71)]_  
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

## Screenshots
**1.Firebase Authentication Setup:** Enabled Email/Password authentication in Firebase Console, ensuring secure user signups and logins for the notes app.
![image](https://github.com/user-attachments/assets/d742b45c-41a0-4537-994a-99507b0a3e7a)


**2. Landing Page:** Clean, inviting interface highlighting key features: cloud sync, security, and cross-platform access along with a theme switcher(dark / light / system)
![image](https://github.com/user-attachments/assets/c6a5a800-f689-4d90-b890-881454328477)
![image](https://github.com/user-attachments/assets/d34f331e-039a-44c5-b287-769b8343c380)

**3. User Registration:** Registration form with validation. Successfully creates users in Firebase Auth (visible in next screenshot).
![image](https://github.com/user-attachments/assets/b76abd98-61bf-450f-a464-e7151508400f)

**4. Firebase User Management:** Verified user mandalasaivaraprasad@gmail.com created on June 28, 2025, with Firebase-assigned UID.
![image](https://github.com/user-attachments/assets/b238262f-931b-4183-9390-aceb7d95d4c0)

**5. Empty Dashboard:** Personalized dashboard post-login, showing user profile and empty notes state with "Create Note".
![image](https://github.com/user-attachments/assets/0d2dd421-686e-475d-a7c3-6f41305815da)

**6. Note Creation:** Added a structured “to-do list for July 1st week” with markdown-style formatting.
![image](https://github.com/user-attachments/assets/d482a206-8b0b-4528-800c-4d48ff0b0dc6)
![image](https://github.com/user-attachments/assets/7b72928c-2dc0-4657-955b-f293272a091c)

**7. Firestore Data:** Note content stored in Firestore with metadata: userId, createdAt, and automatic updatedAt timestamps.
![image](https://github.com/user-attachments/assets/531f1f84-d86d-45db-8871-e62cf447b841)

**8. Populated Dashboard:** Real-time display of the created note with search functionality and last-updated timestamp.
![image](https://github.com/user-attachments/assets/7f930d2b-d53f-4a1b-a48a-4d9698672576)
![image](https://github.com/user-attachments/assets/1290907d-5c4e-427c-89c5-f95125edff0a)



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
