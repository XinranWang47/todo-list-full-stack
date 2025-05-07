# 📝 Full Stack Todo List App

A full-stack Todo List application built with **React** (frontend), **Node.js + Express** (backend), and **MongoDB** (database). This app allows users to create, update, and delete tasks in a simple and responsive interface.

## 🚀 Tech Stack

- **Frontend**: React, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB (running locally)

## 📁 Project Structure

todo-list-full-stack/
- └── server/  (Backend - Node.js + Express + MongoDB)
- └── todo-list/ (Frontend - React)


## ✨ Features

- Add, edit, and delete todos
- Mark todos as completed
- Persistent data storage via MongoDB
- RESTful API integration

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/XinranWang47/todo-list-full-stack.git
cd todo-list-full-stack
```
### 2. Setup the backend
```bash
cd server
npm install
```
Make sure your MongoDB service is running locally (default port: 27017).

⚠️ No .env file is needed. The server is hardcoded to run on port 3001, and expects MongoDB to run at mongodb://localhost:27017/todo-app.

Start the backend server:

```bash
npm start
```
The server will run at: http://localhost:3001

### 3. Setup the frontend
Open a new terminal window:

```bash
cd todo-list
npm install
npm run dev
```

Make sure the backend (http://localhost:3001) is running so the frontend can connect to the API.

## 📌 Future Improvements
- User authentication
- Due dates and reminders
- Drag and drop reordering
- Dark mode
