import "reflect-metadata"
import { DataSource } from "typeorm"
import * as dotenv from "dotenv"
import { User } from "./entity/User"

require('dotenv').config({ path: __dirname + '/.env'})

export const AppDataSource = new DataSource({
    type: "mongodb",
    url: process.env.MONGO_URI,
    useNewUrlParser: true,
    synchronize: true,
    logging: false,
    entities: [User],
    subscribers: [],
})
