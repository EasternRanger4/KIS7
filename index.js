console.log("Server Start up");
const express = require("express");
const Datastore = require("nedb");
var fs = require('fs');

const { response } = require("express/lib/express");
const { request } = require("http");

const app = express();
let port = 3000;

app.listen(port, () => console.log(`Listining at ${port}`));
app.use(express.static("public"));
app.use(express.json({limit: "1mb"}));

const database = new Datastore("data/database.db");
database.loadDatabase();

const databaseCoffee = new Datastore("data/coffeeData.db");
databaseCoffee.loadDatabase();

const databaseLoginHistory = new Datastore("data/loginHistory.db");
databaseLoginHistory.loadDatabase();

database.insert({"Server": "Server Startup"});

app.post('/login', (request, response) => {
  fs.readFile('data/userData.json', 'utf-8', (err, data) => {
    if (err) {
      return response.status(500).send({ message: 'Error reading the file' });
    }

    const userData = JSON.parse(data);
    const { username, password } = request.body;
    const user = userData.find(
      (user) => user.username === username && user.password === password
    );

    if (!user) {
      response.json({ message: false});
      databaseLoginHistory.insert({message: false, username: user.username});
    } else {
      response.json({ message: true, user });
      databaseLoginHistory.insert({message: false, username: user.username})
    }
  });
});