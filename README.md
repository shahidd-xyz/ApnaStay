# ApnaStay
Developed a full-stack deployed web application enabling property listing and booking with secure authentication, CRUD operations, image uploads, advanced search and filtering, and user reviews. Ensures robust authorization, reliable data management, and seamless frontend-backend integration, deployed on scalable cloud infrastructure.

Live Link: https://apnastay-s5fk.onrender.com

Features:
1. Secure authentication (Passport + sessions)
2. Property listing management (Create, Read, Update, Delete)
3. Cloudinary-based image uploads and delivery
4. Interactive map integration (MapTiler)
5. Search and filtering capabilities
6. Review system for listings
7. Authorization for owners and users


Tech Stack:
| Layer    | Technology                  |
| -------- | --------------------------- |
| Backend  | Node.js, Express.js         |
| Database | MongoDB, Mongoose           |
| Frontend | EJS (server-side rendering) |
| Auth     | Passport.js                 |
| Media    | Cloudinary                  |
| Maps     | MapTiler                    |


Project Structure:
```
├── app.js                  # Express app setup and middleware configuration
├── cloudConfig.js          # Cloudinary configuration for image uploads
├── middleware.js           # Custom middleware (authentication, authorization, validation)
├── schema.js               # Data validation schemas (Joi)
├── package.json            # Project dependencies and metadata
├── README.md               # Project overview
│
├── controllers/            # Request handlers for business logic
│   ├── listings.js         # Listing CRUD operations
│   ├── reviews.js          # Review management
│   └── users.js            # User authentication and profile
│
├── models/                 # Database schemas (Mongoose)
│   ├── listing.js          # Listing model with properties
│   ├── review.js           # Review model with ratings
│   └── user.js             # User model with authentication
│
├── routes/                 # API route definitions
│   ├── listings.js         # Routes for listing operations
│   ├── review.js           # Routes for review operations
│   └── user.js             # Routes for user operations (auth, profile)
│
├── views/                  # EJS template files (UI)
│   ├── layouts/
│   │   └── boilerplate.ejs # Main layout template
│   ├── includes/           # Reusable template components
│   │   ├── navbar.ejs      # Navigation bar
│   │   ├── footer.ejs      # Footer
│   │   └── flash.ejs       # Flash message alerts
│   ├── listings/           # Listing-related views
│   │   ├── index.ejs       # All listings page
│   │   ├── show.ejs        # Single listing details
│   │   ├── new.ejs         # Create new listing form
│   │   └── edit.ejs        # Edit listing form
│   ├── users/              # User-related views
│   │   ├── signup.ejs      # Registration page
│   │   └── login.ejs       # Login page
│   └── error.ejs           # Error page
│
├── public/                 # Static files (client-side)
│   ├── css/
│   │   ├── style.css       # Main stylesheet
│   │   └── rating.css      # Rating component styles
│   └── js/
│       ├── script.js       # Main client-side script
│       ├── map.js          # MapTiler integration
│       └── disable-zoom.js # Disable zoom on mobile
│
├── utils/                  # Helper functions
│   ├── ExpressError.js     # Custom error class
│   └── wrapAsync.js        # Async error handling wrapper
│
└── init/                   # Database initialization
    ├── index.js            # Initialization script entry point
    └── data.js             # Sample data for seeding
```

License:
This project is licensed under the MIT License.
