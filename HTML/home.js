const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database');


const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

apiRouter.post('auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

apiRouter.get('/user/:email', async (req, res) => {
  const user = await DB.getUserByEmail(req.params.email);
  if (user) {
    const token = req?.cookies.token;
    res.send({ email: user.email, authenticated: token === user.token });
    return;
  } else {
    const user = await DB.getUserByName(req.params.userName);
    if (user) {
      const token = req?.cookies.token;
      res.send({ userName: user.userName, authenticated: token === user.token });
      return;
    }
  }
  res.status(404).send({ msg: 'Unknown' });
});

var secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

//GetReservations
secureApiRouter.get('/reservations', async (req,res) => {
  const reservations = await DB.getReservations();
  res.send(reservations);
})

//Create a new reservation
secureApiRouter.post('/reservation', async (req, res) => {
  await DB.addReservation(req.body.destination, req.body.startDate, req.body.numDays, req.body.numPeople);
  const reservations = await DB.getReservations();
  res.send(reservations);
});

app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

app.use((_req, res) => {
  res.sendFile('home.html', { root: 'public' });
});

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

var globe = document.getElementById("globe");
globe.addEventListener("mouseover", (event) => {
    // highlight the mouseover target
    event.target.style.color = "grey";
    event.target.style.fontWeight = "800";
    // reset the color after a short delay
    setTimeout(() => {
      event.target.style.color = "";
      event.target.style.fontWeight = "";
    }, 500);
  },
  false
);

function login() {
    //console.log("yes");
    const nameEl = document.querySelector('#userName');
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "travel.html";
}


