const routes = require("express").Router();

const Controllers = require("../controllers");

routes.get("/", Controllers.root);

routes.post("/tsp", Controllers.tsp);

module.exports = routes;
