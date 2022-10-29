import "reflect-metadata"
import { DataSource } from "typeorm"
import * as dotenv from "dotenv"
import { User } from "./entity/User"
import { Tweet } from "./entity/Tweet"

require('dotenv').config({ path: __dirname + '/.env'})

export const AppDataSource = new DataSource({
    type: "mongodb",
    url: process.env.MONGO_URI,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    synchronize: true,
    logging: false,
    entities: [User, Tweet],
})
