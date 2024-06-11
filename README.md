Feedback Management System :
This project is a simple feedback application that allows users to submit their feedback and view a list of all feedback entries. The application is built using React with TypeScript for the frontend and Node.js with Express and TypeScript for the backend. Axios is used for HTTP requests, and a web worker is used to fetch data.
Project Setup and Structure
Frontend
The frontend is created using React with TypeScript. The main components are:
App.tsx: The main component that manages the state of the feedback entries and contains the form and list components.
FeedbackForm.tsx: A component for submitting new feedback entries.
FeedbackList.tsx: A component for displaying the list of feedback entries.
File Structure
src/
|-- components/
|   |-- FeedbackForm.tsx
|   |-- FeedbackList.tsx
|-- workers/
|   |-- feedbackWorker.ts
|-- App.tsx
|-- index.tsx
|-- axios.ts
|-- index.css

Backend
The backend is created using Node.js with Express and TypeScript. It has a simple REST API with endpoints for retrieving and submitting feedback entries. The data is stored in an in-memory array.


File Structure
src/
|-- controllers/
|   |-- feedbackController.ts
|-- routes/
|   |-- feedbackRoutes.ts
|-- services/
|   |-- feedbackService.ts
|-- app.ts
|-- server.ts
|-- tsconfig.json

Logic and Approach
Frontend
State Management: The state for feedback entries is managed in the App component using React's useState hook. This state is initially populated by fetching data from the backend when the component mounts using useEffect.
Form Submission: The FeedbackForm component allows users to submit new feedback entries. On form submission, it sends a POST request to the backend to save the feedback. After a successful submission, it updates the state in the App component to include the new feedback entry.
Web Worker: A web worker is used to fetch the data from the backend. This helps in offloading the data fetching task to a separate thread, ensuring the main thread remains responsive.
Automatic List Update: When a new feedback entry is added via the form, the addFeedback function in the App component updates the state, which causes the FeedbackList component to re-render and display the updated list of feedback entries.
Backend
In-memory Data Storage: Feedback entries are stored in an in-memory array. This approach is used for simplicity and ease of implementation.
Controllers and Services: The backend uses a clear separation of concerns with controllers handling the HTTP requests and responses, and services containing the business logic for managing feedback entries.
REST API Endpoints:
GET /api/feedback: Retrieves all feedback entries.
POST /api/feedback: Submits a new feedback entry.
Getting Started
Prerequisites
Node.js (v14 or higher)
npm (v6 or higher)
Setup Instructions
Clone the repository:
https://github.com/SahilAgrwl/Feedback-Management-System.git
Install dependencies for the frontend:
cd feedback-app
npm install
Install dependencies for the backend:
cd feedback-backend
npm install

Run the backend server:
cd feedback-backend
npx ts-node-dev src/server.ts

Run the frontend development server:
cd feedback-app
npm start
Conclusion
This project demonstrates a simple yet effective way to build a full-stack feedback application using React and Node.js with TypeScript. The application allows users to submit feedback and view a list of all feedback entries, showcasing the use of state management, HTTP requests, and web workers in a React application.


