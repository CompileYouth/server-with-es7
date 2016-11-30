import httpServer from "./lib/http/server.js";

const port = 8000;
httpServer.listen(port, () => {
    console.log(`The server is listening on port: ${port}`);
});
