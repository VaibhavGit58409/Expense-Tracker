# 💰 Expense Tracker (Backend)

This is a **backend API** for an **Expense Tracker App**, built using **Node.js, Express, and MongoDB**. It provides endpoints for **user authentication** and **expense management**.

---

## 🚀 Features
- 🔐 **User Authentication** (Register & Login using JWT)
- 📊 **Expense Management** (Add, View, and Delete Expenses)
- 💾 **MongoDB Integration** (Mongoose ORM)
- 🛡️ **Secure API** with JWT-based authentication
- 🔄 **CORS Enabled** for frontend integration

---

## 📂 Project Structure
📁 Expense-Tracker 
├── 📄 server.js 
├── 📂 models/ 
      ├── 📄 User.js 
      ├── 📄 Expense.js 
├── 📂 routes/ 
      ├── 📄 authRoutes.js 
      ├── 📄 expenseRoutes.js 
├── 📄 .env 
├── 📄 .gitignore 
├── 📄 package.json 
└── 📄 README.md


---

## 🛠 Setup Instructions

### **1️⃣ Clone the Repository**
- ```bash
  git clone https://github.com/VaibhavGit58409/Expense-Tracker.git
  cd Expense-Tracker

### **2️⃣ Install Dependencies**
- ```bash
  npm install

### **3️⃣ Set Up Environment Variables**

Create a .env file in the root directory and add:
- ```ini
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_secret_key


🔹 Replace your_mongodb_connection_string with your actual MongoDB connection URL.
🔹 Replace your_secret_key with a strong secret for JWT authentication.

### **4️⃣ Run the Project**
- ```bash
  node server.js

The server will start at: http://localhost:5000

## API Endpoints

### **1️⃣ Register User 📝**

#### **Endpoint: POST /api/auth/register**
#### **Request Body (JSON)** :
- ```json
  {
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
  }

### **Response**:
- ```json
  {
  "message": "User registered successfully"
  }

### **2️⃣ Login User & Get Token 🔑**

#### **Endpoint: POST /api/auth/login**
#### **Request Body (JSON)**:
- ```json
  {
  "email": "john@example.com",
  "password": "password123"
  }


#### **Response**:
- ```json
  {
  "token": "eyJhbGciOiJIUzI1NiIsInR5c..."
  }

### **3️⃣ Add Expense 💸**

#### **Endpoint: POST /api/expenses**
#### **Headers**:
- ```makefile
Authorization: Bearer <your_token_here>

#### **Request Body(JSON)**:
- ```json
  {
  "title": "Grocery Shopping",
  "amount": 500,
  "category": "Food"
  }

#### **Response**:
- ```json
  {
  "message": "Expense added successfully"
  }


### **4️⃣ Get All Expenses 📜**

#### **Endpoint: GET /api/expenses**
#### **Response(JSON)**:
- ```json
  [
  {
    "id": "123",
    "title": "Grocery Shopping",
    "amount": 500,
    "category": "Food"
  },
  {
    "id": "124",
    "title": "Netflix Subscription",
    "amount": 299,
    "category": "Entertainment"
  }
  ]

### **5️⃣ Delete Expense 🗑️**

#### **Endpoint: DELETE /api/expenses/:id**
#### **Headers**:
- ```makefile
  Authorization: Bearer <your_token_here>

#### **Response (JSON)**:
- ```json
  {
  "message": "Expense deleted successfully"
  }






