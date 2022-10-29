import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { Bootstrap } from './bootstrap'

AppDataSource.initialize().then(async (connection) => {
    await Bootstrap().catch((err) => { console.log(err); })

}).catch(error => console.log(error))