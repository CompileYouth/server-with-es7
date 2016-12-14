import express from "express";

const app = express();

app.attach = function(httpServer) {
    httpServer.on("request", app);
};

export default app;
