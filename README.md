# Next.js Item Management Application

A full-stack web application built with Next.js 15 (App Router) and Express.js for managing items with authentication.

## 🚀 Features

### Implemented Features

1. **Landing Page** (7 Sections)
   - Hero section with CTA buttons
   - Features showcase
   - Featured products grid
   - How it works timeline
   - Customer testimonials
   - Statistics counter
   - Call-to-action section

2. **Authentication System**
   - Mock login with hardcoded credentials
   - Cookie-based session management
   - Protected routes using Next.js middleware
   - Automatic redirect for unauthorized access

3. **Item List Page**
   - Publicly accessible
   - Displays all items from Express API
   - Responsive grid layout
   - Hover effects and animations

4. **Item Details Page**
   - Publicly accessible
   - Full product information
   - Image display
   - Customer reviews section

5. **Protected Add Item Page**
   - Only accessible when logged in
   - Form validation
   - Toast notifications on success
   - Image preview
   - Data persistence via Express API

## 📋 Prerequisites

- Node.js 18+ and npm installed
- Git

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd nextjs-item-app
```

### 2. Install Dependencies

#### Install Next.js Dependencies
```bash
npm install
```

#### Install Express Server Dependencies
```bash
cd express-server
npm install
cd ..
```

### 3. Run the Application

You need to run both the Express server and Next.js app:

#### Terminal 1 - Start Express Server
```bash
cd express-server
npm start
```
Server will run on `http://localhost:5000`

#### Terminal 2 - Start Next.js App
```bash
npm run dev
```
App will run on `http://localhost:3000`

### 4. Access the Application

Open your browser and navigate to: `http://localhost:3000`

## 🔐 Login Credentials

Use these credentials to test the authentication:

- **Email**: `admin@example.com`
- **Password**: `password123`

## 📁 Project Structure

```
nextjs-item-app/
├── app/
│   ├── login/              # Login page
│   ├── items/              # Items list and details
│   │   ├── [id]/          # Dynamic item details
│   │   └── page.js        # Items list
│   ├── add-item/          # Protected add item page
│   ├── layout.js          # Root layout
│   ├── page.js            # Landing page
│   └── globals.css        # Global styles
├── components/
│   ├── Navbar.js          # Navigation component
│   ├── Footer.js          # Footer component
│   └── ItemCard.js        # Item card component
├── lib/
│   └── auth.js            # Authentication utilities
├── express-server/
│   ├── server.js          # Express API server
│   ├── data.json          # Items database
│   └── package.json       # Server dependencies
├── middleware.js          # Route protection
└── package.json           # App dependencies
```

## 🛣️ Route Summary

| Route | Access | Description |
|-------|--------|-------------|
| `/` | Public | Landing page with 7 sections |
| `/login` | Public | Login page |
| `/items` | Public | List of all items |
| `/items/[id]` | Public | Item details page |
| `/add-item` | Protected | Add new item (requires login) |

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/items` | Get all items |
| GET | `/api/items/:id` | Get single item |
| POST | `/api/items` | Create new item |

## 🎨 Technologies Used

- **Frontend**: Next.js 15 (App Router), React 19
- **Styling**: Tailwind CSS
- **Backend**: Express.js
- **Authentication**: Cookie-based (js-cookie)
- **Notifications**: react-hot-toast
- **Database**: JSON file (data.json)

## 📝 Key Features Explained

### 1. Landing Page Sections
- **Hero**: Eye-catching banner with navigation CTAs
- **Features**: Three key benefits with icons
- **Featured Products**: Sample product cards
- **How It Works**: 4-step process visualization
- **Testimonials**: Customer reviews with ratings
- **Stats**: Key metrics display
- **CTA**: Final call-to-action section

### 2. Authentication Flow
- User enters credentials on `/login`
- Credentials validated against hardcoded values
- On success, user data stored in cookies
- Middleware checks cookie for protected routes
- Unauthorized users redirected to login

### 3. Item Management
- Items fetched from Express API
- Create new items via protected form
- Real-time data persistence
- Toast notifications for user feedback

### 4. Route Protection
- Middleware intercepts requests to `/add-item`
- Checks for valid user cookie
- Redirects to `/login` if not authenticated
- Navbar updates based on auth state

## 🚀 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables if needed
4. Deploy

**Note**: For production, you'll need to:
- Deploy Express API separately (Railway, Render, etc.)
- Update API URLs in Next.js app
- Use proper database instead of JSON file

## 🔧 Environment Variables (Optional)

Create `.env.local` for custom configuration:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## 📦 Available Scripts

### Next.js App
```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
```

### Express Server
```bash
npm start        # Start server
npm run dev      # Start with nodemon
```

## 🐛 Troubleshooting

**Items not loading?**
- Ensure Express server is running on port 5000
- Check console for CORS errors

**Login not working?**
- Verify credentials: `admin@example.com` / `password123`
- Clear browser cookies and try again

**Port already in use?**
- Change port in `express-server/server.js`
- Update API URL in Next.js components

## 📄 License

MIT

## 👤 Author

Your Name

---

**Note**: This is a demo application for learning purposes. For production use, implement proper authentication (NextAuth.js), use a real database, and add proper error handling.
