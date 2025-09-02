import { io } from 'socket.io-client';

// The URL for your backend server will be different in production.
// We use a React environment variable to handle this.
const BACKEND_URL = process.env.NODE_ENV === 'production' 
  ? 'https://realtime-editor-yg7w.onrender.com' // <-- REPLACE with your Render backend URL
  : 'http://localhost:5000';

export const initSocket = async () => {
  const options = {
    forceNew: true,
    reconnectionAttempts: Infinity,
    timeout: 10000,
    transports: ['websocket'],
  };

  return io(BACKEND_URL, options);
};
