import app from "./lib/app.js";
import httpServer from "./lib/http/server.js";

app.attach(httpServer);

const port = 8080;
httpServer.listen(port, () => {
    console.log(`The server is running on port ${port}...`);
});
