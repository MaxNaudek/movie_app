require('dotenv').config();
const app = require('./server');
const PORT = process.env.PORT || 8080;

//LISTENER
app.listen(PORT, () =>
console.log(`Servidor corriendo: http://localhost:${PORT}`)
);
