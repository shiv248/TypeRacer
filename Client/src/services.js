import io from "socket.io-client";
const port = 5050;
const ENDPOINT = "localhost:" + port;

export const socket = io(ENDPOINT);
