import app from "./app.js";
import {connectDB} from './db.js'

connectDB();
/*
app.listen(4000)
console.log('Server on port',4000)
*/

// Servidor HTTP
app.listen(process.env.HTTP_PORT, process.env.IP || 4000);
console.log(process.env.IP)