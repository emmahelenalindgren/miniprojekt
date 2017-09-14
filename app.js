var express = require("express");
var app = express();
var http = require("http");
var server = http.Server(app);
var io = require("socket.io")(server);
var pug = require('pug');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');


app.get("/", (req, res) => {
    res.render("index.pug");
})

app.get("/form", (req, res) => {
    res.sendFile(__dirname + "/form.html");
})

app.get("*", (req, res) => {
    res.sendFile(__dirname + "/fel.html");
})

//känner av om någon kopplar upp sig och kopplar bort sig
io.on("connection", (socket) => {
    console.log("a user is connected");
    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
    socket.on("vallokal", (msg) => {
        io.emit("vallokal", msg)
    });
     socket.on("parti", (msg) => {
        io.emit("parti", msg)
    });
     socket.on("roster", (msg) => {
        io.emit("roster", msg)
    });
});

server.listen(3000, () => {
    console.log("lyssnar på 3000");
});