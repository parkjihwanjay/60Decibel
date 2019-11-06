const express = require('express');
const fs = require('fs');
const https = require('https');
const cors = require('cors');
require('./db/mongoose.js');

const userRouter = require('./routers/user.js');
const profileRouter = require('./routers/profile.js');
const stomachRouter = require('./routers/stomach.js');

const app = express();
const port = process.env.PORT || 3000


app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(profileRouter);
app.use(stomachRouter);

https.createServer({
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
  passphrase: '60decibel',
}, app)
.listen(3000, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:port/')
})

// app.listen(port, () => {
//   console.log('server is up on port');
// })





