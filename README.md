# Task Management System API Documentation

## Base URL

- Base URL: `http://localhost:4500/`

## Authentication

- **Middleware:** Authentication required for certain endpoints. Use JWT for authentication.

## User Endpoints

### Sign Up

- **URL:** `/user/signup`
- **Method:** POST
- **Request Body:** `name`, `email`, `password`
- **Response:** Newly created user object

### Login

- **URL:** `/user/login`
- **Method:** POST
- **Request Body:** `email`, `password`
- **Response:** JWT token for authentication

## Task Endpoints

### Get All Tasks

- **URL:** `/task/gettasks`
- **Method:** GET
- **Authentication:** Required
- **Response:** List of all tasks

### Add Task

- **URL:** `/task/addtask`
- **Method:** POST
- **Authentication:** Required
- **Request Body:** `title`, `description`, `dueDate`, `priority`, `status`
- **Response:** Newly created task object

### Update Task

- **URL:** `/task/:id`
- **Method:** PATCH
- **Authentication:** Required
- **Request Body:** Fields to update
- **Response:** Updated task object

### Delete Task

- **URL:** `/task/:id`
- **Method:** DELETE
- **Authentication:** Required
- **Response:** Success message

### Get Task by ID

- **URL:** `/task/:id`
- **Method:** GET
- **Authentication:** Required
- **Response:** Task object

**Note:** Ensure to update the `mongoUrl` in the `.env` file with the correct MongoDB connection URL.
