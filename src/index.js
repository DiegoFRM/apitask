import app from "./app.js";
import {connectDB} from './db.js'
import http from 'http'
import {createRequire} from 'module'
const require = createRequire(import.meta.url);
require('dotenv').config();


connectDB();
/*
app.listen(4000)
console.log('Server on port',4000)
*/

// Servidor HTTP
const serverHttp = http.createServer(app);
serverHttp.listen(process.env.HTTP_PORT, process.env.IP);
serverHttp.on('listening', () => console.info(`Notes App running at http://${process.env.IP}:${process.env.HTTP_PORT}`));


