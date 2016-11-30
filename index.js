import app from "./lib/app.js";
import httpServer from "./lib/http/server.js";

const port = 8000;
app.attach(httpServer);
httpServer.listen(port, () => {
    console.log(`The server is listening on port: ${port}`);
});
