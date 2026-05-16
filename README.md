# Vidtube - Frontend

A modern, feature-rich video sharing platform built with React and Vite. Vidtube provides a YouTube-like experience with video uploads, playlists, subscriptions, comments, and more.

## 🚀 Features

- **Video Management**: Upload, view, search, and manage videos
- **User Channels**: Create and manage personalized channels
- **Playlists**: Create, and organize video playlists
- **Subscriptions**: Subscribe to channels and stay updated
- **Comments**: Comment on videos and engage with the community
- **Likes & Interactions**: Like videos and interact with content
- **Watch History**: Track your viewing history
- **Search**: Search for videos and channels
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Updates**: Stay in sync with live updates using React Query

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment configuration** (if needed)
   - Copy `.env.example` to `.env.local` if it exists
   - Configure your API endpoint

## 🏃 Running the Project

### Development Server
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Lint Code
```bash
npm lint
```

## 📁 Project Structure

```
src/
├── Api/                    # API integration layer
│   ├── axiosInstance.js   # Configured Axios instance
│   ├── channel.api.js     # Channel endpoints
│   ├── comment.api.js     # Comment endpoints
│   ├── like.api.js        # Like endpoints
│   ├── playlist.api.js    # Playlist endpoints
│   ├── subscription.api.js # Subscription endpoints
│   ├── user.api.js        # User endpoints
│   └── video.api.js       # Video endpoints
│
├── components/            # React components
│   ├── ui/               # Shadcn/UI components
│   ├── auth-requirement.jsx
│   ├── card.jsx
│   ├── comment-section.jsx
│   ├── like-btn.jsx
│   ├── login-form.jsx
│   ├── nav-bar.jsx
│   ├── playlist-*.jsx
│   ├── search-bar.jsx
│   ├── subscribe-btn.jsx
│   ├── upload-video-form.jsx
│   └── ...other components
│
├── hooks/                 # Custom React hooks
│   ├── useAuth.js        # Authentication hook
│   ├── useChannel.js     # Channel management
│   ├── useComment.js     # Comment operations
│   ├── useLike.js        # Like operations
│   ├── usePlaylist.js    # Playlist management
│   ├── useSubscription.js # Subscription management
│   ├── useVideo.js       # Video operations
│   └── use-mobile.js     # Responsive design detection
│
├── pages/                 # Page components
│   ├── authentication/
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   └── home/
│       ├── Channel.jsx
│       ├── ChannelStats.jsx
│       ├── History.jsx
│       ├── Home.jsx
│       ├── Playlist.jsx
│       ├── playlistVideos.jsx
│       ├── SearchPage.jsx
│       ├── Subscription.jsx
│       └── Video.jsx
│
├── store/                 # Zustand state management
│   ├── useAuthStore.jsx  # Authentication state
│   ├── useToggleStore.jsx # UI toggle state
│   └── useVideoStore.jsx # Video state
│
├── lib/
│   └── utils.js          # Utility functions
│
├── App.jsx               # Main App component
├── Layout.jsx            # Layout wrapper
└── main.jsx              # Entry point
```

## 🎨 Technology Stack

### Frontend Framework
- **React 19.2**: Latest React with concurrent features
- **Vite 7.3**: Lightning-fast build tool

### Styling
- **Tailwind CSS 4.2**: Utility-first CSS framework
- **Radix UI**: Unstyled, accessible component primitives
- **Framer Motion 12.38**: Animation library
- **Lucide React & React Icons**: Icon libraries

### State Management & Data Fetching
- **Zustand 5.0**: Lightweight state management
- **React Query 5.90**: Powerful data fetching and caching

### HTTP Client
- **Axios 1.13**: Promise-based HTTP client

### Routing
- **React Router 7.13**: Client-side routing

### Notifications
- **React Hot Toast 2.6**: Toast notifications

### Video Playback
- **React Player 3.4**: Flexible video player component

### Developer Tools
- **ESLint 9.39**: Code linting
- **Babel React Compiler**: Optimized React compilation

## 🔑 Key Features Breakdown

### Authentication
- User login and signup functionality
- Protected routes and authentication requirements
- Auth state management via Zustand store

### Video Management
- Upload videos with metadata
- View video details and statistics
- Update and delete video operations
- Video player with controls
- Watch history tracking

### Social Features
- Subscribe to channels
- Like/unlike videos
- Comment on videos
- Create and manage playlists
- Share playlists with others

### Discovery
- Search videos and channels
- Browse channel subscriptions
- View personalized homepage
- Channel statistics and analytics

## 🎯 API Integration

All API calls are centralized in the `Api/` folder:
- Uses Axios instance with pre-configured defaults
- Consistent error handling and response formatting
- Environment-based API endpoint configuration

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first approach using Tailwind CSS
- Custom `use-mobile` hook for responsive behavior
- Collapsible sidebar navigation
- Adaptive layouts for different screen sizes

## 🚀 Deployment

### Build Optimization
```bash
npm run build
```
This creates an optimized production build in the `dist/` directory.

### Deploy to Static Hosting
The built files can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static file hosting service

## 📝 Environment Variables

Create a `.env.local` file in the project root:
```
VITE_API_BASE_URL=your_api_endpoint_here
```

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/AmazingFeature`)
2. Commit your changes (`git commit -m 'Add AmazingFeature'`)
3. Push to the branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, email your-email@example.com or open an issue on the repository.

## 🎬 Getting Started with Vidtube

1. **Install dependencies**: `npm install`
2. **Start development server**: `npm run dev`
3. **Open browser**: Navigate to `http://localhost:5173`
4. **Create an account**: Sign up to start using Vidtube
5. **Explore**: Browse videos, subscribe to channels, and create playlists

---

**Made with ❤️ for the community**

