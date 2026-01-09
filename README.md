# 🚗 Car Rental Platform

A modern, full-stack car rental application built with React and Node.js. This platform connects car owners with customers looking to rent vehicles, featuring a multi-role system with user, vendor, and admin capabilities.

## 🌐 Live Demo

🔗 **[View Live Application](https://carrental-pr.vercel.app/)**

## 📁 Repository

🔗 **[GitHub Repository](https://github.com/harshdubey6/car-rental)**

---

## ✨ Features

### For Customers (Users)
- 🔍 Browse and search available cars
- 📋 View detailed car information (brand, model, year, fuel type, transmission, etc.)
- 📅 Book cars with pickup and return dates
- 📖 Track booking history and status
- 🔐 Secure user authentication

### For Car Owners (Vendors)
- 🚙 Add and manage car listings
- 📸 Upload car images via ImageKit integration
- 📊 Dashboard to monitor listings
- 📝 Manage incoming booking requests
- ✅ Confirm or cancel bookings

### For Administrators
- 👥 Manage all users in the system
- 🏪 Manage vendor accounts
- 🔒 Enable/disable user accounts
- 📈 Admin dashboard with overview

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 19** | UI Framework |
| **React Router DOM 7** | Client-side routing |
| **Tailwind CSS 4** | Styling |
| **Motion** | Animations |
| **Axios** | HTTP client |
| **React Hot Toast** | Notifications |
| **Vite** | Build tool |

### Backend
| Technology | Purpose |
|------------|---------|
| **Node.js** | Runtime environment |
| **Express 5** | Web framework |
| **MongoDB** | Database |
| **Mongoose** | ODM |
| **JWT** | Authentication |
| **bcrypt** | Password hashing |
| **ImageKit** | Image storage & CDN |
| **Multer** | File uploads |

---

## 📂 Project Structure

```
car-rent/
├── client/                    # Frontend React application
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── assets/          # Images and icons
│   │   ├── components/      # Reusable UI components
│   │   │   ├── admin/       # Admin-specific components
│   │   │   ├── owner/       # Vendor-specific components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── CarCard.jsx
│   │   │   └── ...
│   │   ├── context/         # React Context (AppContext)
│   │   ├── pages/           # Page components
│   │   │   ├── admin/       # Admin pages
│   │   │   ├── owner/       # Vendor pages
│   │   │   ├── Home.jsx
│   │   │   ├── Cars.jsx
│   │   │   ├── CarDetails.jsx
│   │   │   └── MyBookings.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── server/                    # Backend Node.js application
    ├── configs/              # Database & other configurations
    ├── controllers/          # Route handlers
    │   ├── userController.js
    │   ├── ownerController.js
    │   ├── adminController.js
    │   └── bookingController.js
    ├── middleware/           # Authentication middleware
    ├── models/               # Mongoose schemas
    │   ├── User.js
    │   ├── Car.js
    │   └── Booking.js
    ├── routes/               # API routes
    ├── scripts/              # Utility scripts
    ├── server.js             # Entry point
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB database
- ImageKit account (for image uploads)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/harshdubey6/car-rental.git
   cd car-rental
   ```

2. **Setup Backend**
   ```bash
   cd server
   npm install
   ```
   
   Create a `.env` file in the server directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
   IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
   ```

3. **Setup Frontend**
   ```bash
   cd ../client
   npm install
   ```
   
   Create a `.env` file in the client directory:
   ```env
   VITE_API_URL=http://localhost:5000
   ```

4. **Create Admin User (Optional)**
   ```bash
   cd server
   npm run create-admin
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd server
   npm run server    # Development with nodemon
   # or
   npm start         # Production
   ```

2. **Start the Frontend**
   ```bash
   cd client
   npm run dev
   ```

3. **Access the Application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:5000`

---

## 📱 Routes & Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero section and featured cars |
| `/cars` | Browse all available cars |
| `/car-details/:id` | Detailed view of a specific car |
| `/my-bookings` | User's booking history |
| `/vendor` | Vendor dashboard |
| `/vendor/add-car` | Add new car listing |
| `/vendor/manage-cars` | Manage car listings |
| `/vendor/manage-bookings` | Manage booking requests |
| `/admin` | Admin dashboard |
| `/admin/users` | Manage users |
| `/admin/vendors` | Manage vendors |

---

## 🔑 User Roles

| Role | Capabilities |
|------|--------------|
| **User** | Browse cars, make bookings, view booking history |
| **Vendor** | All user capabilities + manage car listings and bookings |
| **Admin** | Full system access, manage users and vendors |

---

## 🌟 Key Components

- **Hero** - Landing page hero section
- **CarCard** - Reusable car display card
- **FeaturedSection** - Featured cars showcase
- **Banner** - Promotional banners
- **Testimonial** - Customer testimonials
- **Newsletter** - Email subscription section
- **Login** - Authentication modal

---

## 📄 API Endpoints

### User Routes
- `POST /api/user/register` - Register new user
- `POST /api/user/login` - User login
- `GET /api/user/profile` - Get user profile

### Car Routes
- `GET /api/cars` - Get all cars
- `GET /api/cars/:id` - Get car by ID
- `POST /api/owner/add-car` - Add new car (Vendor)
- `PUT /api/owner/update-car/:id` - Update car (Vendor)
- `DELETE /api/owner/delete-car/:id` - Delete car (Vendor)

### Booking Routes
- `POST /api/booking/create` - Create booking
- `GET /api/booking/user` - Get user bookings
- `PUT /api/booking/status/:id` - Update booking status

---

## 🚀 Deployment

The application is deployed using:
- **Frontend**: Vercel
- **Backend**: Vercel Serverless Functions
- **Database**: MongoDB Atlas
- **Images**: ImageKit CDN

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Harsh Dubey**

- GitHub: [@harshdubey6](https://github.com/harshdubey6)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/harshdubey6/car-rental/issues).

---

<p align="center">Made with ❤️ by Harsh Dubey</p>
