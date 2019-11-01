const express = require('express');
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

app.listen(port, () => {
  console.log('server is up on 3000');
})





