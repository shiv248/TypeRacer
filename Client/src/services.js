import io from "socket.io-client";
const port = process.env.PORT || 5050;
const ENDPOINT = "https://scribing.herokuapp.com" + port;

export const socket = io(ENDPOINT);
