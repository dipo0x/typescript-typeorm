import { getRepository } from "typeorm"
import { User } from "./entity/User"
import { Tweet } from "./entity/Tweet"

export const Bootstrap = async () => {
	const userRepo = getRepository(User);
	const user = userRepo.create({ 
		firstName: 'Oladipo', 
		lastName: 'Adesiyan', 
		age: 16
	});
	await userRepo.save(user).catch((err) => {
		console.log('Error:', err)
	})
	console.log("New User Saved", user);

	const tweetRepo = getRepository(Tweet);
	const tweet = new Tweet();
	tweet.title = 'I finally got a new job'
	tweet.content = "Yo!, y'all, I finally got a job at Apple!"
	tweet.user = Promise.resolve(user);
	await tweetRepo.save(tweet).catch((err) => console.log(err))
}

export const find = async () => {
	const userRepo = getRepository(User);

	const user = await userRepo.findOne({ where: { firstName: "Oladipo" } }).catch((err) => {
		console.log(err)
	})
	if(user)
	console.log('User:', user, await user.tweets)
}