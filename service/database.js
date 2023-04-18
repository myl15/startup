const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
    throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const userCollection = client.db('oneglobe').collection('user');
const reservationCollection = client.db('oneglobe').collection('reservation');

function getUserByEmail(email) {
    return userCollection.findOne({ email: email});
}

function getUserByName(userName) {
    return userCollection.findOne({ userName: userName});
}

function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}

async function createUser(email, password, userName) {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        email: email,
        password: passwordHash,
        userName: userName,
        token: uuid.v4(),
    };
    await userCollection.insertOne(user);

    return user;
}

function addReservation(user, destination, startDate, numDays, numPeople) {
    const reservation = {
        user: user,
        destination: destination,
        startDate: startDate,
        numDays: numDays,
        numPeople: numPeople,
    };
    reservationCollection.insertOne(reservation);
	return reservation;
}

function getReservations() {
    // const query = {};
    const cursor = reservationCollection.find();
	return cursor.toArray();
}

module.exports = {
    getUserByEmail,
	getUserByName,
    getUserByToken,
    createUser,
    addReservation,
    getReservations,
};
