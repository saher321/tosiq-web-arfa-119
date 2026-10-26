PMS - Project management system

FRONTEND -> REACTJS
BACKEND  -> NODEJS WITH EXPRESS

KEY POINTS:
    1. Authentication
        login, signup, forgot password, reset password, 
        -> emailing + system generated random otp
    2. Dashboard
        -> Admin dashboard
        -> Employee dashboard
    3. Customers / client
        - id, name, email, contact, address
    4. Projects
        - id, title, status, start date, dead line, customer, note
    5. Tasks
        - id, priority, name, content, project, status
    
    Rules
    1. Admin has hold on all operations
    2. Employee can view his task

----------------------------
PKGS

Frontend
    - react-router, zustand, axios, lucide-react
    - react-hot-form, react-hot-toast, moment
    - tailwindcss @tailwindcss/vite

Backend
    - express, nodemon, mongoose, nodemailer, cors
    - nodemailer, nanoid, jsonwebtoken, bcryptjs