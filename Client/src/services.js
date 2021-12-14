import io from "socket.io-client";
const port = process.env.PORT || 5050;
const ENDPOINT = "localhost:" + port;

export const socket = io(ENDPOINT);
