import app from "./lib/app.js";
import httpServer from "./lib/http/server.js";

app.attach(httpServer);
httpServer.listen(8081, () => {
    console.log(`The server is on port 8081...`);
});
