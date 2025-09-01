// socket.js
import { io } from 'socket.io-client';

export const initSocket = async () => {
  const options = {
    forceNew: true,                 // always create a new connection
    reconnectionAttempts: Infinity, // retry forever if disconnected
    timeout: 10000,                 // 10s timeout
    transports: ['websocket', 'polling'], // allow fallback
  };

  // Backend URL:
  // - Use REACT_APP_BACKEND_URL if provided
  // - Otherwise, use localhost in dev
  // - Or your deployed backend in prod
  const socketUrl =
    process.env.REACT_APP_BACKEND_URL ||
    (process.env.NODE_ENV === 'production'
      ? 'https://your-backend-host.com' // <-- change this
      : 'http://localhost:5000');

  return io(socketUrl, options);
};
