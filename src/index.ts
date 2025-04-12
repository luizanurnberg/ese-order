import http from "./routes/http-server";
import db from "./config/db-server";

async function start() {
    await db.connectDataBase();
    http.runHttpServer();
}

start();
