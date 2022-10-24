import { getRepository } from "typeorm"
import { User } from "./entity/User"

export const Bootstrap = async () => {
	const userRepo = getRepository(User);
	const user = userRepo.create({ firstName: 'Oladipo', lastName: 'Adesiyan', age: 2});
	await userRepo.save(user).catch((err) => {
		console.log(err)
	})
	console.log("New User Saved", user);
}