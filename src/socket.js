// socket.js
import { io } from 'socket.io-client';

export const initSocket = async () => {
  const options = {
    forceNew: true,                  // always create a new connection
    reconnectionAttempts: Infinity,  // retry forever if disconnected
    timeout: 10000,                  // 10s timeout
    transports: ['websocket'],       // prefer websocket for stability
  };

  // ✅ Local backend URL only
  const socketUrl = 'http://localhost:5000';

  return io(socketUrl, options);
};