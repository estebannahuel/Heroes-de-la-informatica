const express = require("express");
const routers = require("./function/routers");
const app = express();
const PORT = 3000;

const arrayRutas = [ //routers
    {
        routerName: "/",
        router: "index.html",
    },
    {
        routerName: "/babbage",
        router: "babbage.html",
    },
    {
        routerName: "/berners-lee",
        router: "berners-lee.html",
    },
    {
        routerName: "/clarke",
        router: "clarke.html",
    },
    {
        routerName: "/hamilton",
        router: "hamilton.html",
    },,
    {
        routerName: "/hopper",
        router: "hopper.html",
    },
    {
        routerName: "/lovelace",
        router: "lovelace.html",
    },
    {
        routerName: "/turing",
        router: "turing.html",
    },
]

app.use(express.static('public'))

routers.routers(app,arrayRutas)


app.listen(PORT,console.log(`Servidor levantado http://localhost:${PORT}`))
