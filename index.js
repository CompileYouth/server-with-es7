import config from "config";

import app from "./lib/app.js";
import httpServer from "./lib/http/server.js";



(function main() {
    checkEnv();
    startHttpServer();
})();

function checkEnv() {
    const env = app.get("env");
    if (env === "development") {
        console.log("dev mode");
    }
    else if (env === "production"){
        console.log("production mode");
    }
    else {
        throw new Error("wrong mode");
    }
}

function startHttpServer() {
    const port = parseInt(config.get("http.port"));
    if (isNaN(port)) {
        throw new Error(`"http.port" must be specified as number in config.`);
    }
    app.attach(httpServer);
    httpServer.listen(port, () => {
        console.log(`The server is listening on port: ${port}`);
    });
}
