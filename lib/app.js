import express from "express";

const app = express();
app.attach = function(httpServer) {
    httpServer.on("request", app);
}

app.use(express.static("public"));

app.use("/api", require("./http/api/index.js").default);

export default app;
