import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { Bootstrap } from './bootstrap'

AppDataSource.initialize().then(async (connection) => {

    /* 
        console.log("Inserting a new user into the database...")
        const user = new User()
        user.firstName = "Timber"
        user.lastName = "Saw"
        user.age = 25
        await connection.manager.save(user)
        console.log("Saved a new user with id: " + user.id)

        console.log("Loading users from the database...")
        const users = await connection.manager.find(User)
        console.log("Loaded users: ", users)

        console.log("Here you can setup and run express / fastify / any other framework.")
    */

    await Bootstrap().catch((err) => { console.log(err); })

}).catch(error => console.log(error))