import * as dotenv from "dotenv";
import { Sequelize } from "sequelize-typescript";

dotenv.config();

class SequelizeAdapter {
    public instance: Sequelize | undefined;

    public async connectDataBase(forceSync?: boolean) {
        const databaseInstance = new Sequelize({
            database: process.env.POSTGRES_DB,
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            port: Number(process.env.POSTGRES_PORT),
            host: 'localhost',
            dialect: "postgres",
            logging: false,
        });

        this.instance = databaseInstance;

        try {
            await this.instance.authenticate();
            // console.log("PostgreSQL Connection has been established successfully.");
        } catch (error) {
            console.error("Unable to connect to the PostgreSQL database:", error);
        }

        try {
            await this.instance.sync({ force: forceSync });
            // console.log("Sync all defined models to the DB.");
        } catch (error) {
            // console.log("Unable to sync models on DB: ", error);
        }
    }
}

export default new SequelizeAdapter();