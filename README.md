FabriCore
Factory Management System

🚀 Features
..
..
..
📋 Requirements
Git – for cloning the repository
PHP >= 8.0 – backend runtime
Composer – PHP package manager
Node.js >= 18 – required for React
MySQL Server – for database management
🛠️ Installation
# 1. Clone the repository
git clone https://github.com/itsmohamedmousa/GradPath.git
📂 Backend Setup (PHP + MySQL)
# 2. Navigate into the backend directory
cd GradPath/Backend

# 3. Install PHP dependencies
composer install

# 4. Create the database in your mysql server
sudo mysql -u root
Then run this inside the MySQL shell:

CREATE DATABASE GradPath;
EXIT;
# 5. Import the sql dump file
sudo mysql -u root GradPath < GradPath.sql
🔙 Run the Backend Server
# 6. Run the PHP server
php -S localhost:8000
💻 Frontend Setup (React)
In a separate terminal:

# 7. Navigate to the frontend directory
cd ../Frontend

# 8. Install frontend dependencies
npm install

# 9. Start the REACT development server
npm run dev
🔐 Create Environment Files
Create .env files inside Frontend and Backend directories and add the following:

### GradPath/Backend/.env

DB_HOST=127.0.0.1
DB_NAME=GradPath
# Use your database's username and password
DB_USER=root
DB_PASSWORD=

JWT_SECRET=YourSecretKey
# Edit to change login session's expiry date
JWT_EXPIRES_IN=3600

# Server Configuration
FRONTEND_URL=http://localhost:5173
### GradPath/Frontend/.env

VITE_API_URL=http://localhost:8000/api
⚠️ Disclaimer
The project will not work without the environment files
