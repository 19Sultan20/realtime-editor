import { io } from 'socket.io-client';

export const initSocket = async () => {
  const options = {
    'force new connection': true,
    reconnectionAttempts: 'Infinity',
    timeout: 10000,
    transports: ['websocket'],
  };
  // Use window.location.origin for production (same host as frontend)
  // Fallback to localhost for development
  const socketUrl = process.env.REACT_APP_BACKEND_URL || window.location.origin;
  return io(socketUrl, options);
};