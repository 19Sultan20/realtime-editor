import { io } from 'socket.io-client';

const BACKEND_URL =
  process.env.NODE_ENV === 'production'
    ? window.location.origin // same domain as served React
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
